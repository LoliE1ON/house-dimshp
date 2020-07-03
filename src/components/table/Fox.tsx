import React, { useEffect, useMemo } from "react";
import { TableFoxProps } from "./types";

import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setTableData } from "../../store/Table/actions";
import { Header } from "./Header";
import { Rows } from "./Rows";
import { RootState } from "../../store/reducers";
import { ItemColumnFilterType } from "../../store/Table/types";

export const TableFox = ({ data, columns, id, sort, EditComponent }: TableFoxProps) => {
  const dispatch = useDispatch();

  const convert = (value: any, type: ItemColumnFilterType) => {
    if (type === "int") {
      return parseInt(value) || 0;
    }
    if (type === "float") {
      return parseFloat(value) || 0.0;
    }

    return value.toString();
  };

  data = useMemo(() => {
    let clonedData = [...data];
    columns.map(
      ({ type, name }) =>
        (clonedData = clonedData.map((items: any) => ({
          ...items,
          [name]: convert(items[name], type),
        }))),
    );
    return clonedData;
  }, [columns, data]);

  // Set data to storage
  useEffect(() => {
    dispatch(
      setTableData({
        data,
        type: id,
        filteredData: data,
        sortColumn: null,
        editRow: null,
        defaultSort: {
          columnName: sort.name,
          sort: sort.sort,
        },
        columns: columns.map(column => ({
          ...column,
          filters: {
            textContains: {
              contains: "",
            },
            multiSelect: {
              items: [],
            },
          },

          uniqueItems: Array.from(new Set(data.map((row: any) => row[column.name].toString()))).map((item: any) => ({
            title: item,
            total: data.filter((itemData: any) => itemData[column.name].toString() === item.toString()).length,
          })),
        })),
      }),
    );
  }, [dispatch, data, id, columns, sort]);

  const table = useSelector((state: RootState) => state.table.filter(item => item.type === id)?.[0]);

  // Hide all multi selectors
  const hideMultiSelectors = (e: any) => {
    if (!e.target.closest(".col-input")) {
      Array.from(document.querySelectorAll(".list.visible")).forEach(item => item.classList.remove("visible"));
    }
  };
  useEffect(() => {
    document.body.addEventListener("click", hideMultiSelectors);
    return () => document.body.removeEventListener("click", hideMultiSelectors);
  });

  return (
    <div className="table-scroll">
      <div className="table-fox-container card">
        {table?.data?.length > 0 ? (
          <div>
            <Header table={table} />

            <Rows table={table} EditComponent={EditComponent} />
          </div>
        ) : (
          <div>Loading data</div>
        )}
      </div>
    </div>
  );
};
