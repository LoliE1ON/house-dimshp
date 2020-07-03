import { Table, TableActions } from "./types";
import {
  SAVE_TABLE_ITEM,
  SET_EDIT_ROW,
  SET_TABLE_COLUMN_MULTI_SELECT_ITEMS,
  SET_TABLE_DATA,
  SET_TABLE_SORT_COLUMN,
  UPDATE_TABLE_COLUMN_FILTERS,
  UPDATE_TABLE_FILTERED_DATA,
} from "./actions";

const initialState: Table = [];

export const tableReducer = (state = initialState, action: TableActions) => {
  switch (action.type) {
    case SET_TABLE_DATA: {
      return [action.payload];
    }
    case SAVE_TABLE_ITEM: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                data: item.data.map(item => (item.id === action.payload.id ? { ...action.payload.row } : { ...item })),
              }
            : item,
        ),
      ];
    }
    case SET_EDIT_ROW: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                editRow: item.editRow === action.payload.editRow ? null : action.payload.editRow,
              }
            : item,
        ),
      ];
    }
    case UPDATE_TABLE_COLUMN_FILTERS: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                columns: action.payload.filters,
              }
            : item,
        ),
      ];
    }
    case UPDATE_TABLE_FILTERED_DATA: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                filteredData: action.payload.filteredData,
              }
            : item,
        ),
      ];
    }
    case SET_TABLE_COLUMN_MULTI_SELECT_ITEMS: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                columns: item.columns.map(column =>
                  column.name === action.payload.column
                    ? {
                        ...column,
                        filters: {
                          ...column.filters,
                          multiSelect: {
                            ...column.filters.multiSelect,
                            items: action.payload.items,
                          },
                        },
                      }
                    : column,
                ),
              }
            : item,
        ),
      ];
    }
    case SET_TABLE_SORT_COLUMN: {
      return [
        ...state.map(item =>
          item.type === action.payload.type
            ? {
                ...item,
                sortColumn: action.payload.sortColumn,
              }
            : item,
        ),
      ];
    }
  }
  return state;
};
