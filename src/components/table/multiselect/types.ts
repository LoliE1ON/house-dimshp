import { TableItem, TableItemColumn } from "../../../store/Table/types";

export type MultiSelectProps = {
  item: TableItemColumn;
  table: TableItem;
};

export type CustomFiltersProps = MultiSelectProps;

export type FilterButtonProps = {
  column: TableItemColumn;
};
