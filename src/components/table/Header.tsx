import React from "react";
import { HeaderProps } from "./types";
import { MultiSelect } from "./multiselect/MultiSelect";
import { TextContains } from "./TextContains";
import { useDispatch } from "react-redux";
import { setTableSortColumn } from "../../store/Table/actions";
import { SortColumn } from "../../store/Table/types";

export const Header = ({ table }: HeaderProps) => {
  const dispatch = useDispatch();

  // Change sort for column
  const onClickHeaderColumn = ({ target }: { target: any }, columnName: string) => {
    if (target.closest(".filter-wrapper")) return;

    let sortColumn: SortColumn | null = {
      columnName,
      sort: "asc",
    };

    if (table.sortColumn) {
      if (table.sortColumn.columnName === columnName) {
        if (table.sortColumn.sort === "desc") sortColumn = null;
        else sortColumn.sort = "desc";
      } else sortColumn.sort = "asc";
    }

    dispatch(
      setTableSortColumn({
        type: table.type,
        sortColumn,
      }),
    );
  };

  const SortIcon = ({ name }: { name: string }) => {
    return (
      <>
        {table.sortColumn?.columnName === name ? (
          table.sortColumn?.sort === "asc" ? (
            <i className="fas fa-angle-up" />
          ) : (
            <i className="fas fa-angle-down" />
          )
        ) : (
          <i className="fas fa-angle-left text-arrow-light" />
        )}
      </>
    );
  };

  return (
    <div className="table-fox">
      {table?.columns.map(item => (
        <div
          className="table-fox-col table-fox-col-header"
          key={item.name}
          onClick={e => onClickHeaderColumn(e, item.name)}>
          <div className="columns w pr-1">
            <div className="column col-12 c-hand p-0 pl-1">
              <div className="col-header-title" key={item.title}>
                <div className="col-title">
                  <div className="text" title={item.title}>
                    {item.title}
                  </div>
                  <div className="sort">
                    <SortIcon name={item.name} />
                  </div>
                </div>
              </div>
            </div>
            <div className="column col-12">
              <div className="filter-wrapper">
                <TextContains item={item} table={table} />
                <MultiSelect item={item} table={table} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
