import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const UpdateStore = () => {
  const dispatch = useDispatch();
  // we created an object here named dispatch using useDispatch

  //dispatch sends the type like type 'ADD' or type 'REMOVE' in action in cartreducer in cartreducer.js

  //Now to not let cart values go below 0
  // const cartvalue = useSelector(store => store)

  //THE SECOND STORE HAS ALL VALUES WHICH WILL BE PASSED IN CARTVALUE.BUT WE ONLY NEED CART_VALUE. SO WE DID:-
  // {cartvalue.cart_value > 0 && <button onClick={() => dispatch({ type: 'REMOVE' })}>Remove From Cart</button>}

  /* useSelector (store=>store) means 1st store is Provider Store and the next store is NEW CREATED STORE WHICH WILL RETURN VALUES IN CARTVALUE */

  //Basically, useSelector access Provider Store Which access OueStore i.e Const OurSTore Which Access Cartreducer

  //here, cartvalue is the name of store and below cart_values will represent our cart data

  //useSelector lets us access cart values i.e Cart_Values

  //   const cartvalue = useSelector(store => store)

  //This is for combined Store
  const cartvalue = useSelector((store) => store.cartValue);

  //   const cartvalue = useSelector(store => store.cart_value)   THIS MEANS STORE STORE NOW SHOWS ONLY CART.VALUES
  //IF WE DO SO, WE THEN HAVE TO WRITE:-
  //  {cartvalue> 0 && <button onClick={() => dispatch({ type: 'REMOVE' })}>Remove From Cart</button>}
  //As we only need cart_value

  const add_item = () => {
    dispatch({ type: "ADD" });
  };
  return (
    <>
      <button onClick={add_item}>Add To Cart</button>
      {cartvalue.cart_value > 0 && (
        <button onClick={() => dispatch({ type: "REMOVE" })}>
          Remove From Cart
        </button>
      )}
    </>
  );
};

export default UpdateStore;
