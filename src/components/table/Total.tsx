import React, { useMemo } from "react";
import { TotalProps } from "./types";

export const Total = ({ table }: TotalProps) => {
  const total = useMemo(
    () =>
      table.columns.map(column => {
        if (column.type === "int") {
          return table.filteredData.reduce(
            (acc, arr) => +arr[column.name] + acc,
            0
          );
        } else if (column.type === "float") {
          return table.filteredData
            .reduce((acc: number, arr) => +arr[column.name] + acc, 0)
            .toFixed(2);
        } else return "";
      }),
    [table.filteredData, table.columns]
  );

  const TotalTemplate = ({ value }: { value: string }) => (
    <>
      <i className="fas fa-calculator mr-2" /> <b>{value.toString()}</b>
    </>
  );

  return (
    <>
      <div className="table-fox">
        {total.map((value: any, i) => (
          <div className="table-fox-col table-total-row" key={i}>
            {value.toString().length > 0 && (
              <TotalTemplate value={value.toString()} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};
