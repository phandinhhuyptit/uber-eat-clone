import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./auth";

let reducers = combineReducers({
  cartReducer: cartReducer,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
