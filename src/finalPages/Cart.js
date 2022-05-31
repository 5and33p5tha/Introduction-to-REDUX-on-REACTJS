import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Item from "../components/Item";

const Cart = () => {
  //Defining useState and useSelector for Displaying what is in cart
  const items_in_cart = useSelector((store) => store.cart.cart_items);

  const dispatch = useDispatch();
  //For Using The Dispatch

  //Now to
  return (
    <>
      <Navbar />

      {/* <div className='container mx-auto'>
           
           <div className="row row-cols-1 row-cols-md-4 g-4">

               {items_in_cart.map((display_current_item, j) => {
                   return (<Item key={j} data={display_current_item} />)
                         //Here, key is defined to resolve unique item problem

               })}

           </div>
       </div> */}

      <div className="container mx-auto">
        {/* 
           ternary operator
           condition? calue if true: value if false */}
        {/* Ternary operator is used here so as to show no table if cart is empty and show tableonly when cart has values */}

        {items_in_cart.length > 0 ? (
          //For True Value of Ternary operator

          <table className="table">
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Image:</th>
                <th>Name:</th>
                <th>Price:</th>
                <th>Product Description:</th>
                <th>Action:</th>
              </tr>
            </thead>
            <tbody>
              {items_in_cart.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  {/* Here, +1 since 1 will start from 0 and we need 1 as first entry in serial no */}
                  <td>
                    <img
                      src={item.item_image}
                      style={{ height: "100px", width: "90px" }}
                    />
                  </td>
                  <td style={{ maxWidth: "150px", overflow: "hidden" }}>
                    {item.item_name}
                  </td>
                  {/* Here, maxWidth represents that the maximum width should be no more than 150px */}
                  <td>{item.item_price}</td>
                  <td>{item.item_Desc}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                    >
                      Remove
                    </button>
                  </td>
                  {/* Here, item is the same item as in above map funcction and .item_image, .item_name, etc are all from the itemreducer,js which will be taken in order after loops */}
                </tr>

                // console.log({item}) This WIll PASS ENTIRE ITEM FROM ITEMREDUCER IN EVERYTHING INTO CONSOLE IN BROWSER

                // console.log(item.item_name)
                // This WIll just PASS item_name from ITEM of ITEMREDUCER IN EVERYTHING INTO CONSOLE IN BROWSER
                //No Curly Brackets Necessary Here
              ))}
              <tr>
                <td className="border-0">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: "EMPTY_THE_CART" })}
                  >
                    Empty All Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          //For False Value of Ternary operator
          <h2>You have no items in cart</h2>
        )}
      </div>
    </>
  );
};

export default Cart;