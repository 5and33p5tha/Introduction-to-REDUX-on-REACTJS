import Main from "../pages/Main";

//cartreducer will help add or remove the already defined datas
//Cart Reducer is linked to UpdateCart.js

const initialData = {
  cart_value: 0,
};
// Headers, initialData is an object that we created
//Always use colon in object.
//Always use Curly Brackets for objects and Variables.

function cartreducer(state = initialData, action) {
  //In This Action, we get values from UpdateStore.JS

  //Initially, we need to switch action.
  switch (action.type) {
    case "ADD":
      //That means for Type 'ADD'
      return {
        cart_value: ++state.cart_value,
      };

    //HERE, WE USE RETURN IN EACH CASE SO AS TO CHANGE THE VALUE OF CART_VALUE

    //AS CART_VALUE IS AN OBJECT, WE NEED CURLY BRACKETS IN RETURN ASWELL

    case "REMOVE":
      //That Means for Type 'REMOVE'
      return {
        cart_value: --state.cart_value,
      };

    default:
      return state;
  }
}

export default cartreducer;

// To use cartreducer, we have created store in Main.js
