import { SetDisplayHeaderAction, SetDisplayHeaderPayload } from "./types";

export const SET_DISPLAY_HEADER = "SET_DISPLAY_HEADER";

export function setDisplayHeader(payload: SetDisplayHeaderPayload): SetDisplayHeaderAction {
  return {
    type: SET_DISPLAY_HEADER,
    payload,
  };
}