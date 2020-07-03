import {
  AddRecordAction,
  AddRecordPayload,
  SetFetchingAction,
  SetFetchingPayload,
  SetNewRecordAction,
  SetNewRecordPayload,
  SetRecordAction,
  SetRecordPayload,
  ThunkType,
} from "./types";
import { addRecordRequest, generateRecordsRequest, getRecordsRequest } from "../../api/records";

export const SET_RECORD = "SET_RECORD";
export const SET_NEW_RECORD = "SET_NEW_RECORD";
export const ADD_RECORD = "ADD_RECORD";
export const SET_FETCHING = "SET_FETCHING";

export function setFetching(payload: SetFetchingPayload): SetFetchingAction {
  return {
    type: SET_FETCHING,
    payload,
  };
}

export function setRecord(payload: SetRecordPayload): SetRecordAction {
  return {
    type: SET_RECORD,
    payload,
  };
}

export function setNewRecord(payload: SetNewRecordPayload): SetNewRecordAction {
  return {
    type: SET_NEW_RECORD,
    payload,
  };
}

export function addRecord(payload: AddRecordPayload): AddRecordAction {
  return {
    type: ADD_RECORD,
    payload,
  };
}

// Async action creators
export const generateRecords = (date: string): ThunkType => {
  return async dispatch => {
    dispatch(
      setFetching({
        isLoadingGenerateRecords: true,
      }),
    );

    const response = await generateRecordsRequest({
      date,
    }).then(
      ({ data }) => JSON.parse(data.data),
      () => false,
    );

    dispatch(
      setRecord({
        record: response.records,
      }),
    );
  };
};

export const getListRecords = (date: string): ThunkType => {
  return async dispatch => {
    dispatch(
      setFetching({
        isLoadingSwitchDate: true,
      }),
    );

    const response = await getRecordsRequest({
      date,
    }).then(
      ({ data }) => JSON.parse(data.data),
      () => false,
    );

    dispatch(
      setNewRecord({
        record: response.records,
      }),
    );
  };
};

export const addNewRecord = (date: string, room: string): ThunkType => {
  return async dispatch => {
    dispatch(
      setFetching({
        isLoadingAddRecord: true,
      }),
    );

    const response = await addRecordRequest({
      date,
      room,
    }).then(
      ({ data }) => JSON.parse(data.data),
      () => false,
    );

    dispatch(
      addRecord({
        record: response.records,
      }),
    );
  };
};
