import { ItemColumnFilterType } from "../../store/Table/types";

export const sortString = (data: any[], sort: "asc" | "desc", column: string) => {
  if (sort === "asc") {
    return data.sort((a, b) => a[column].localeCompare(b[column]));
  } else {
    return data.sort((a, b) => a[column].localeCompare(b[column])).reverse();
  }
};

export const sortNumber = (data: any[], sort: "asc" | "desc", column: string) => {
  if (sort === "asc") {
    return data.sort((a, b) => b[column] - a[column]);
  } else {
    return data.sort((a, b) => a[column] - b[column]);
  }
};

export const convert = (value: any, type: ItemColumnFilterType) => {
  if (type === "date" && value.length > 0) {
    if (value !== "0") return new Date(+value * 1000).toLocaleDateString();
    else return "";
  }
  return value;
};
