// Syntax for initialData
// const initialData = [
// This will pass array
// ]

const initialData = {
  cart_items: [],
  // This will pass the Object
};

function newCartreducer(state = initialData, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart_items: [
          ...state.cart_items,
          action.payload,
        ] /* Here, This means everytime in cart, the previous items will remain via ...state.cart_items and ,action.payload will add new items */,
        // This means cart will have old items Plus new items added
        //...state.cart_items = old cart values and
        // ,action.payload = new cart values via dispatch when button is clicked
        // The dispatch is in Item.js and is as:- <button className='btn btn-primary mt-3' onClick={() => dispatch({ type: 'ADD_TO_CART', payload: prop.data })}> Add to Cart </button>
      };

    case "EMPTY_THE_CART":
      return {
        cart_items: [],
      };

    case "REMOVE_FROM_CART":
      return {
        cart_items: state.cart_items.filter(
          (item) => action.payload.item_name !== item.item_name
        ),
        //filter passes all the item_name prom payload into action and then into item. IT WORKS LIKFE FOR EACH OR MAP FUNCTION
        //THE CONDITION FOR FILTER IS THAT IF THE NAME MATCHES, IT SKIPS skips.

        //FOR EG:- if we used .filter(item => action.payload.item_name == item.item_name), it will skip everything except that name
        // This line .filter(item => action.payload.item_name !== item.item_name) tries to match the item_name and once it finds the match, it skips over it. Hence the similar name is skipped at displaying and thus is removed
      };

    default:
      return state;
  }
}

export default newCartreducer;