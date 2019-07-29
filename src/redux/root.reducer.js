import { combineReducers } from 'redux';
import { Example_reducer } from "../components/Home/redux/reducers/example.reducer";

// main reducer which includes others
export const rootReducer = combineReducers({
  Example_reducer
});