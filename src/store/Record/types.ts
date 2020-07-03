import { ADD_RECORD, SET_FETCHING, SET_NEW_RECORD, SET_RECORD } from "./actions";
import { RootState } from "../reducers";
import { ThunkAction } from "redux-thunk";

export type RecordState = {
  list: Record[];
  isLoadingAddRecord: boolean;
  isLoadingSwitchDate: boolean;
  isLoadingGenerateRecords: boolean;
};

export type Record = {
  id: number;
  room: string;
  date: number;
  name: string | null;
  lastName: string | null;
  mobile: string | null;
  totalPeople: number;
  arrivalDate: number;
  departureDate: number;
  money: string | null;
  paymentState: number;
  additionally: string | null;
  numberDinners: number;
  numberMidday: number;
  numberBreakfasts: number;
};

export type SetRecordPayload = {
  record: Record[];
};

export type SetRecordAction = {
  type: typeof SET_RECORD;
  payload: SetRecordPayload;
};

export type SetNewRecordPayload = {
  record: Record[];
};

export type SetNewRecordAction = {
  type: typeof SET_NEW_RECORD;
  payload: SetNewRecordPayload;
};

export type AddRecordPayload = {
  record: Record[];
};

export type AddRecordAction = {
  type: typeof ADD_RECORD;
  payload: AddRecordPayload;
};

export type SetFetchingPayload =
  | {
      isLoadingAddRecord: boolean;
    }
  | {
      isLoadingSwitchDate: boolean;
    }
  | {
      isLoadingGenerateRecords: boolean;
    };

export type SetFetchingAction = {
  type: typeof SET_FETCHING;
  payload: SetFetchingPayload;
};

export type RecordActions = SetRecordAction | SetNewRecordAction | AddRecordAction | SetFetchingAction;

export type ThunkType = ThunkAction<Promise<void>, RootState, unknown, RecordActions>;
