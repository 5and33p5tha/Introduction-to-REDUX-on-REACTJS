// Name of All Pages Should Be Capital
import React from "react";
import { Provider } from "react-redux";
import Items from "../components/Items.js";
import Navbar from "../components/Navbar";
import finalRootReducer from "../newReducers/finalRootReducer.js";
import { createStore } from "redux";

const Mainpage = () => {
  const store = createStore(finalRootReducer);
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Items />
      </Provider>
    </>
  );
};

export default Mainpage;