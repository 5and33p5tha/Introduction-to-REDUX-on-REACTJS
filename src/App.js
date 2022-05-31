// import logo from "./logo.svg";
import "./App.css";
// import Main from "./pages/Main";
import MyRoutes from "./MyRoutes";
import { createStore } from "redux";
import finalRootReducer from "./newReducers/finalRootReducer";
import { Provider } from "react-redux";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

//WHAT WE ARE USING IS JSX as in WE ARE USING JS and HTML CODES IN SAME PAGE
// JSX= JavsScript Syntax Extension

// To Install Redux Persist

// Documentation:- https://www.npmjs.com/package/redux-persist

// Install:- npm install redux-persist

// Redux Persist Helps to store in local storage. We can Say  It AS THE EXACT OPPOSTE OF AXIOS.
// It Helps to store in Local Storage of LocalHost i.e in browser.
// Inspect->Application->LocalHost Root

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };
  //THIS IS THE CONFIGURATION SETUP TO PASS VALUE IN LOCAL STORAGE.

  const our_persistReducer = persistReducer(persistConfig, finalRootReducer);
  //THIS CREATES PERSISTREDUCER TAKING FINAL ROOT REDUCER. THIS IS FOR LOCAL STORAGE
  // This sends all items WE HAVE to the local STORAGE OF LOCAL HOST. THIS IS JUST A TEMPORARY METHOD AS ONCE BACKEND IS CREATED, ONLY LISTED ITEMS WILL BE SENT AND NOT ALL

  const my_store = createStore(our_persistReducer);
  //WE PASS OUR_PERSISTREDUCER IN MYSTORE

  const persist_store = persistStore(my_store);
  //THIS IS LIKE USESELECTOR WHIH LETS US USE MYSTORE

  return (
    <Provider store={my_store}>
      <PersistGate persistor={persist_store}>
        {/* PERSISTGATE IS LIKE PROVIDER BUT FOR PERSIST AND PERSISTOR IS LIKE STORE OF PROVIDER */}

        <MyRoutes />
      </PersistGate>
    </Provider>
  );
}

export default App;
