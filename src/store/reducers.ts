import { combineReducers } from "redux";
import { configReducer as config } from "./Config/reducer";
import { recordReducer as record } from "./Record/reducer";
import { tableReducer as table } from "./Table/reducer";

export const reducers = combineReducers({
  config,
  record,
  table,
});

export type RootState = ReturnType<typeof reducers>;
