import { api } from "./utils";

export type GenerateRowsParams = {
  date: string;
};

export type AddRecordParams = {
  date: string;
  room: string;
};

export type SaveRecordParams = {
  id: number;
  row: any;
};

export const generateRecordsRequest = async (params: GenerateRowsParams) => await api.post("records/generate", params);
export const getRecordsRequest = async (params: GenerateRowsParams) => await api.post("records/list", params);
export const addRecordRequest = async (params: AddRecordParams) => await api.post("records/add", params);
export const saveRecordRequest = async (params: SaveRecordParams) => await api.post("records/save", params);
