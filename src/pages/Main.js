// Note:- Always use capitai initial for components in react
// Say Main.js, Footer, Navbar. Basicallly everything that will be imported via import

import React from "react";
import { Provider, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import cartreducer from "../reducer/cartreducer";
import DisplayStore from "./DisplayStore";
import UpdateStore from "./UpdateStore";
import gamereducer from "../reducer/gamereducer";
import DisplayGame from "./DisplayGame";
import UpdateGame from "./UpdateGame";
import rootreducers from "../reducer/rootreducer";

const Main = () => {
  // const ourStore = createStore(cartreducer)  THIS IS COMMENTED FORE GAMEREDUCER AS BOTH CANNOT BE WRITTEN IN SAME AREA as provider store will collide AS IN DISPLAYSTORE AND DISPLAY GAME, BOTH HAS USED STOE IN DISPLAYSTORE.JS AND DISPLAYGAME.JS.WE NEED TO COMBINE TO USE IT

  //Create store  i.e createStore is redux built in.
  //Here, createStore is  making const ourStore an object  as cartreducer. Similar concept as class and object in O.O.P
  //Basically, we make an object with the values of cartreducer

  //const store = useSelector(store=>store) This is commented just to show that this can be doe here as well

  // const gameStore = createStore(gamereducer)
  //Commented For Combined Store

  const finalStore = createStore(rootreducers);

  return (
    //THE FOLLOWING WILL BE COMMENTED FOR GAMEREDUCER
    // <Provider store={ourStore}>
    //     {/* Here, Provider is needed to pass the value of ourStore in Store */}
    //     {/* HERE, STORE IS A PROVIDER ATTRIBUTE */}

    //     <DisplayStore />

    //     {/* Display Store helps to show the value in Provider's store */}

    //     <UpdateStore/>

    // </Provider>

    //Provider Store for gamereducer
    // <Provider store={gameStore}>

    //     <DisplayGame />

    //     <UpdateGame />

    // </Provider>

    <Provider store={finalStore}>
      <DisplayStore />

      <UpdateStore />

      <DisplayGame />

      <UpdateGame />
    </Provider>
  );
};

export default Main;

// Working for Cartreducer;

// ourStore is creating the object with cartreducer.

// then, provider store is getting all that value of ourStore

// all the values in provider store will be displayed via DisplayStore
