import { SET_DISPLAY_HEADER } from "./actions";

export type ConfigState = {
  displayHeader: boolean;
};

export type SetDisplayHeaderPayload = boolean;

export type SetDisplayHeaderAction = {
  type: typeof SET_DISPLAY_HEADER;
  payload: SetDisplayHeaderPayload;
};

export type ConfigActions = SetDisplayHeaderAction;
