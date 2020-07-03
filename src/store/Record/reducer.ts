import { Record, RecordActions, RecordState } from "./types";
import { ADD_RECORD, SET_FETCHING, SET_NEW_RECORD, SET_RECORD } from "./actions";

const initialState: RecordState = {
  list: [],
  isLoadingAddRecord: false,
  isLoadingGenerateRecords: false,
  isLoadingSwitchDate: false,
};

export const recordReducer = (state = initialState, action: RecordActions) => {
  switch (action.type) {
    case SET_RECORD: {
      return { ...state, list: [...state.list, ...action.payload.record], isLoadingGenerateRecords: false };
    }
    case SET_NEW_RECORD: {
      return { ...state, list: [...action.payload.record], isLoadingSwitchDate: false };
    }
    case ADD_RECORD: {
      return { ...state, list: [...state.list, ...action.payload.record], isLoadingAddRecord: false };
    }
    case SET_FETCHING: {
      return { ...state, ...action.payload };
    }
  }
  return state;
};
