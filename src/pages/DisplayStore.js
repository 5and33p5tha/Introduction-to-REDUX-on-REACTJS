// import React from 'react'
// import { useSelector } from 'react-redux'

// const DisplayStore = () => {
//     const cart = useSelector(store => store)
//     //The useSelectore allows us to use the store that we created.
//     return (
//         <h1>The number of items in cart : {cart.cart_value}
//             {/* Here, since cart.cart_value is a variable, so we use curly braces */}

//         </h1>
//     )
// }

// export default DisplayStore

//For Combined Store:-
import React from "react";
import { useSelector } from "react-redux";

const DisplayStore = () => {
  const cart = useSelector((store) => store.cartValue.cart_value);
  //The useSelectore allows us to use the store that we created.
  return (
    <h1>
      The number of items in cart : {cart}
      {/* Here, since cart.cart_value is a variable, so we use curly braces */}
    </h1>
  );
};

export default DisplayStore;