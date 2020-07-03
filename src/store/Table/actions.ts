import {
  ActionSaveTableItem,
  ActionSetEditRow,
  ActionSetTableColumnMultiSelect,
  ActionSetTableData,
  ActionSetTableSortColumn,
  ActionUpdateFilteredData,
  ActionUpdateTableColumnFilters,
  ColumnFiltersPayload,
  ColumnMultiSelectPayload,
  FilteredDataPayload,
  SaveTableItemPayload,
  SetEditRowPayload,
  SetTablePayload,
  SetTableSortColumnPayload,
} from "./types";

export const SET_TABLE_DATA = "SET_TABLE_DATA";
export const UPDATE_TABLE_COLUMN_FILTERS = "UPDATE_TABLE_COLUMN_FILTERS";
export const UPDATE_TABLE_FILTERED_DATA = "UPDATE_TABLE_FILTERED_DATA";
export const SET_TABLE_COLUMN_MULTI_SELECT_ITEMS = "SET_TABLE_COLUMN_MULTI_SELECT_ITEMS";
export const SET_TABLE_SORT_COLUMN = "SET_TABLE_SORT_COLUMN";
export const SET_EDIT_ROW = "SET_EDIT_ROW";
export const SAVE_TABLE_ITEM = "SAVE_TABLE_ITEM";

// Set new table item
export function setEditRow(payload: SetEditRowPayload): ActionSetEditRow {
  return {
    type: SET_EDIT_ROW,
    payload,
  };
}

// Save table item
export function saveTableItem(payload: SaveTableItemPayload): ActionSaveTableItem {
  return {
    type: SAVE_TABLE_ITEM,
    payload,
  };
}

// Set new table item
export function setTableData(payload: SetTablePayload): ActionSetTableData {
  return {
    type: SET_TABLE_DATA,
    payload,
  };
}

// Update filters for table
export function updateTableColumnFilters(payload: ColumnFiltersPayload): ActionUpdateTableColumnFilters {
  return {
    type: UPDATE_TABLE_COLUMN_FILTERS,
    payload,
  };
}

// Update filtered data
export function updateTableFilteredData(payload: FilteredDataPayload): ActionUpdateFilteredData {
  return {
    type: UPDATE_TABLE_FILTERED_DATA,
    payload,
  };
}

// Set new multi select items for column
export function setTableColumnMultiSelect(payload: ColumnMultiSelectPayload): ActionSetTableColumnMultiSelect {
  return {
    type: SET_TABLE_COLUMN_MULTI_SELECT_ITEMS,
    payload,
  };
}

// Set sort column
export function setTableSortColumn(payload: SetTableSortColumnPayload): ActionSetTableSortColumn {
  return {
    type: SET_TABLE_SORT_COLUMN,
    payload,
  };
}
