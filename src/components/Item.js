import React from "react";
import { useDispatch } from "react-redux";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (prop) => {
  // const { item_name, item_price, item_image, item_desc } = prop.data
  // Here we are de-sturcturing the object i.e object de-structuring

  //Here, prop.data links the values passed from data in map function in items.js into prop

  //Here, FOR DE-STRUCTURING:- 4 datas will be genereted as we have given four fields, hence this will be put in order of the object created.
  // return <>
  //     {/* The following will be displayed for each item after looping */}
  //     <div className="col">
  //         <div className="card">
  //             <img src={image} className="card-img-top" alt={name} />
  //             <div className="card-body">
  //                 <h5 className="card-title">{name}</h5>
  //                 <h5 className="card-title">{price}</h5>
  //                 <h5 className="card-title">{desc}</h5>
  //             </div>
  //         </div>
  //     </div>
  //     {/* HERE, When ITEMS is CALLED, IT CALLS ITEM via MAP FUNCTION and ITEM WILL SHOW ALL OUR OBJECT ARRAYS (iphone 13 Pro Max, etc) via Prop.Data and object destructuring */}
  // </>;

  // const value = prop.data
  //     return <>
  //     {/* The following will be displayed for each item after looping */}
  //     <div className="col">
  //         <div className="card">
  //             <img src={value.item_image} className="card-img-top" alt={value.item_name} />
  //             <div className="card-body">
  //                 <h5 className="card-title">{value.item_name}</h5>
  //                 <h5 className="card-title">{value.item_price}</h5>
  //                 <h5 className="card-title">{value.item_desc}</h5>
  //             </div>
  //         </div>
  //     </div>
  //     {/* HERE, When ITEMS is CALLED, IT CALLS ITEM via MAP FUNCTION and ITEM WILL SHOW ALL OUR OBJECT ARRAYS (iphone 13 Pro Max, etc) via Prop.Data and object destructuring */}
  // </>;

  // To do all via de-structuring:-
  const { item_name, item_price, item_image, item_desc } = prop.data;

  //Dispatch for Button
  const dispatch = useDispatch();

  return (
    <>
      {/* The following will be displayed for each item after looping */}
      <div className="col">
        <div className="card mb-4">
          <img
            src={item_image}
            className="card-img-top"
            alt={item_name}
            style={{ height: "250px" }}
            title={item_name}
          />

          {/* Title displays the name after a few duration when it is hovered */}

          <div className="card-body overflow-hidden text-center">
            <h5 className="card-title text-nowrap" title={item_name}>
              {item_name}
            </h5>
            <h5 className="card-title">{item_price}</h5>
            <h5 className="card-title">{item_desc}</h5>
            <button
              className="btn btn-primary mt-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: prop.data })
              }
            >
              {" "}
              Add to Cart{" "}
            </button>
            {/* The Above data-bs-toggle="modal" data-bs-target="#exampleModal" is for modal */}
          </div>
        </div>
      </div>
      {/* HERE, When ITEMS is CALLED, IT CALLS ITEM via MAP FUNCTION and ITEM WILL SHOW ALL OUR OBJECT ARRAYS (iphone 13 Pro Max, etc) via Prop.Data and object destructuring */}

      {/* <!-- Modal --> */}
      {/* Modal is like a pop up message */}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{item_name} has been added to cart</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Keep Shopping
              </button>
              {/* Here, data-bs-dismiss = "modal" helps to close the modal. Elsem the modal will be active throughout */}

              <Link to="/Cart">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  View Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;