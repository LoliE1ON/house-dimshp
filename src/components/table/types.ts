import { TableItem, TableItemColumn } from "../../store/Table/types";
import React, { ChangeEvent, FC } from "react";

export type TableFoxProps = {
  columns: Column[];
  data: any;
  id: string;
  sort: {
    name: string;
    sort: "asc" | "desc";
  };
  EditComponent?: React.FunctionComponent<WrapEditRecordProps>;
};

type ColumnType = "string" | "int" | "float" | "date";
type Column = {
  title: string;
  name: string;
  type: ColumnType;
};

export type CurrentTarget = { currentTarget: HTMLElement };
export type ChangeCurrentTarget = { currentTarget: HTMLInputElement };
export type ChangeInputArgs = {
  currentTarget: EventTarget & HTMLInputElement;
  name: string;
};

export type TextContainsProps = {
  item: TableItemColumn;
  table: TableItem;
};

export type HeaderProps = {
  table: TableItem;
};

export type RowsProps = {
  table: TableItem;
  EditComponent?: React.FunctionComponent<WrapEditRecordProps>;
};

export type TotalProps = {
  table: TableItem;
};

export type WrapEditRecordProps = {
  row: any;
  saveRow: (id: number, row: any[]) => void;
};
