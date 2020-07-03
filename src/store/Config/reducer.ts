import { ConfigActions, ConfigState } from "./types";
import { SET_DISPLAY_HEADER } from "./actions";

const initialState: ConfigState = {
  displayHeader: true,
};

export const configReducer = (state = initialState, action: ConfigActions) => {
  switch (action.type) {
    case SET_DISPLAY_HEADER: {
      return {
        ...state,
        displayHeader: action.payload,
      };
    }
  }
  return state;
};
