import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { TableItemColumn } from "../../store/Table/types";
import { saveTableItem, setEditRow, updateTableFilteredData } from "../../store/Table/actions";
import { RowsProps, WrapEditRecordProps } from "./types";
import { Total } from "./Total";
import { convert, sortNumber, sortString } from "./sortFunctions";

export const Rows = ({ table, EditComponent }: RowsProps) => {
  const dispatch = useDispatch();

  const filters: TableItemColumn[] = useSelector(
    (state: RootState) => state.table.filter(item => item.type === table.type)?.[0]?.columns,
  );

  const updateData = useMemo(() => {
    if (!filters?.length) return table.data;
    // Filtering
    let filteredData = table.data;
    filters.forEach(filter => {
      // Text contains
      filteredData = filteredData.filter((row: any) =>
        row[filter.name].toString().includes(filter.filters.textContains.contains),
      );
      // Multi select filtering
      filteredData = filteredData.filter((row: any) =>
        filter.filters.multiSelect.items.length > 0
          ? filter.filters.multiSelect.items.includes(row[filter.name].toString())
          : true,
      );
    });

    // Sort column. ASC/DESC
    const sortColumn = table.sortColumn ?? table.defaultSort;

    const filterColumn = table.columns.filter(column => column.name === sortColumn.columnName)[0];
    if (filterColumn.type === "string") {
      filteredData = sortString(filteredData, sortColumn.sort, sortColumn.columnName);
    } else if (filterColumn.type === "int" || filterColumn.type === "float" || filterColumn.type === "date") {
      filteredData = sortNumber(filteredData, sortColumn.sort, sortColumn.columnName);
    }

    // Data
    table.columns.map(
      ({ type, name }) =>
        (filteredData = filteredData.map((items: any) => ({
          ...items,
          [name]: convert(items[name], type),
        }))),
    );

    console.log(table.columns);

    return filteredData;
  }, [filters, table.data, table.sortColumn, table.columns, table.defaultSort]);

  // Update filtered data in storage
  useEffect(() => {
    dispatch(
      updateTableFilteredData({
        type: table.type,
        filteredData: updateData,
      }),
    );
  }, [dispatch, updateData, table.type]);

  // Edit row
  const onEditRow = (id: number) => {
    dispatch(
      setEditRow({
        type: table.type,
        editRow: id,
      }),
    );
  };

  // Save row from edit component
  const saveRow = (id: number, row: any) => {
    dispatch(
      saveTableItem({
        type: table.type,
        row,
        id,
      }),
    );

    dispatch(
      setEditRow({
        type: table.type,
        editRow: 0,
      }),
    );
  };

  // Wrapped edit component
  const WrapComponent = (WrappedComponent: React.FunctionComponent<WrapEditRecordProps>) => (props: { row: any }) => (
    <WrappedComponent row={props.row} saveRow={saveRow} />
  );
  if (!EditComponent) EditComponent = () => <span>{""}</span>;
  const WrappedEditComponent = WrapComponent(EditComponent);

  return (
    <>
      {table?.filteredData.map((row: any) => (
        <>
          <div className="table-fox" onDoubleClick={() => onEditRow(+row.id)} key={row.id}>
            {table.columns.map(({ name }) => (
              <div className="table-fox-col" key={name}>
                <span className="text-crop" title={row[name].toString()}>
                  {row[name].toString()}
                </span>
              </div>
            ))}
          </div>
          {table.editRow === row.id && EditComponent ? <WrappedEditComponent row={row} /> : ""}
        </>
      ))}

      <Total table={table} />
    </>
  );
};
