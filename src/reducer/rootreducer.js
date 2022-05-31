import { combineReducers } from "redux";
import cartreducer from "./cartreducer";
import gamereducer from "./gamereducer";

const rootreducers = combineReducers({
  //This will combine both reducers
  //Now to combile stores, i.e USE BOTH REDUCER IN SAME PROVIDER
  cartValue: cartreducer,
  gameValue: gamereducer,
});

export default rootreducers;
