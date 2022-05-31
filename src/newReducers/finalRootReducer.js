import { combineReducers } from "redux";
import newCartreducer from "./newCartreducer";
import itemreducer from "./itemreducer";

const finalRootReducer = combineReducers({
  //Here, final root reducer is the combination of the two reducers
  items: itemreducer,
  cart: newCartreducer,
});

export default finalRootReducer;
