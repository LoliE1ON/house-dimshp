import {
  SAVE_TABLE_ITEM,
  SET_EDIT_ROW,
  SET_TABLE_COLUMN_MULTI_SELECT_ITEMS,
  SET_TABLE_DATA,
  SET_TABLE_SORT_COLUMN,
  UPDATE_TABLE_COLUMN_FILTERS,
  UPDATE_TABLE_FILTERED_DATA,
} from "./actions";

export type TableItem = {
  type: string;
  data: any[];
  filteredData: any[];
  columns: TableItemColumn[];
  sortColumn: SortColumn | null;
  defaultSort: SortColumn;
  editRow: number | null;
};

export type SortColumn = {
  columnName: string;
  sort: "asc" | "desc";
};

export type ItemColumnFilterType = "string" | "int" | "float" | "date";
export type TableItemColumn = {
  name: string;
  type: ItemColumnFilterType;
  title: string;
  filters: {
    textContains: {
      contains: string;
    };
    multiSelect: {
      items: string[];
    };
  };
  uniqueItems: ColumnUniqueItem[];
};

export type ColumnUniqueItem = {
  title: string;
  total: number;
};
export type Table = TableItem[];

export type SetTablePayload = {
  data: any;
  type: string;
  filteredData: any[];
  columns: TableItemColumn[];
  sortColumn: SortColumn | null;
  defaultSort: SortColumn;
  editRow: number | null;
};

export type ColumnFiltersPayload = {
  type: string;
  filters: TableItemColumn[];
};

export type FilteredDataPayload = {
  type: string;
  filteredData: any[];
};

export type ColumnMultiSelectPayload = {
  type: string;
  column: string;
  items: string[];
};

export type SetTableSortColumnPayload = {
  type: string;
  sortColumn: SortColumn | null;
};

export type ActionSetTableData = {
  type: typeof SET_TABLE_DATA;
  payload: SetTablePayload;
};

export type ActionUpdateTableColumnFilters = {
  type: typeof UPDATE_TABLE_COLUMN_FILTERS;
  payload: ColumnFiltersPayload;
};

export type ActionSetTableColumnMultiSelect = {
  type: typeof SET_TABLE_COLUMN_MULTI_SELECT_ITEMS;
  payload: ColumnMultiSelectPayload;
};

export type ActionUpdateFilteredData = {
  type: typeof UPDATE_TABLE_FILTERED_DATA;
  payload: FilteredDataPayload;
};

export type ActionSetTableSortColumn = {
  type: typeof SET_TABLE_SORT_COLUMN;
  payload: SetTableSortColumnPayload;
};

export type ActionSetEditRow = {
  type: typeof SET_EDIT_ROW;
  payload: SetEditRowPayload;
};

export type SetEditRowPayload = {
  type: string;
  editRow: number;
};

export type ActionSaveTableItem = {
  type: typeof SAVE_TABLE_ITEM;
  payload: SaveTableItemPayload;
};

export type SaveTableItemPayload = {
  type: string;
  id: number;
  row: any;
};

export type TableActions =
  | ActionSetTableData
  | ActionUpdateTableColumnFilters
  | ActionUpdateFilteredData
  | ActionSetTableColumnMultiSelect
  | ActionSetTableSortColumn
  | ActionSetEditRow
  | ActionSaveTableItem;
