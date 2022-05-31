//What we do here in ITEMS:- is We use FOR LOOP and DISPLAY ITEM 1 BY 1.

import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import Navbar from "./Navbar";
import { useState } from "react";

const Items = () => {
  let all_items = useSelector((store) => store.items.itemsdata);
  // since the value of all items needs to ChannelMergerNode, so we use let instead of const
  //Created New Object
  //here, items from store.items is from combine reducer where items: itemreducer, and itemreducer is from function itemreducer.js
  //and itemsdata is from itemsreducer object, arrays that we created from various phones

  //UseState for Search
  const [search, setSearch] = useState("");

  //To filter searh data:=
  const filter_data = () => {
    // const data=all_items
    // all_items = data.filter(item=>item.item_name.toLowerCase().includes(search))

    // OR BETTER:-
    all_items = all_items.filter((item) =>
      item.item_name.toLowerCase().includes(search.toLowerCase())
    );
    //As Search is case sensitive, so shift it all in lower case so as IPHONE and iphone will show same result and both will work
  };

  return (
    <>
      <Navbar />

      <div className="row bg-secondary py-1">
        <div className="col-md-7 mx-auto">
          <div className="form-floating">
            <input
              type="search"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onKeyUp={(event) => setSearch(event.target.value)}
              onChange={filter_data()}
            />
            {/* onKeyUp={()=>setSearch(event=>event.target.value)} THIS WILL PUT VALUE IN SETSEARCH which then puts that value in search*/}
            {/* onChange={filter_data()} THIS CALLS THE FUNCTION filter_data() When Key Changes */}

            {/* In above scenario, the OnChange and OnKeyUp functions are interchangable */}
            {/*HENCE, WE Can Also Do:-
                    <input type="search" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onKeyUp={(event) => (setSearch(event.target.value))} onChange={filter_data()} /> */}

            <label htmlFor="exampleFormControlInput1" className="form-label">
              Search
            </label>

            {/* IN BOOTSTRAP, ALWAYS PUT LABEL BELOW INPUT AND PUT FORM_CONTROL IN INPUT AND FORM FLOATING IN THAT CONTAINER WHICH HAS INPUT  */}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-4">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* Here, g=Gutter */}

          {/* Loop started for item for multiple cards*/}
          {all_items.map((individual_item, i) => {
            return <Item key={i} data={individual_item} />;

            //Here, key is defined to resolve unique item problem

            //The map function will pass {item} into data WHICH INTURN passes into prop in items.js

            //So, when items is called, it will display all data of ITEM via map function (map function will take all the values in ITEM and SHOW IT IN ITEMS)

            //If only one statement, no curly bracket needed and we can do:
            // {items.map((item) => {
            //     return
            //     <Item data={item} />
            // })}

            {
              /* 
                OR:-

                {items.map((item) => 
                    <Item data={item} />
                }) */
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Items;