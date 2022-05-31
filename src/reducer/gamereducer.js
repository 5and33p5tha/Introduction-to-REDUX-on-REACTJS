//Game Reducer will take value from the user
//Game Reducer is linked to UpdateGame.js

const initialData = {
  game_name: "Footall",
  player_name: "Cristiano Ronaldo",

  // You can give either single or double quote
};

function gamereducer(state = initialData, action) {
  switch (action.type) {
    case "UPDATE_GAME":
      // We Do if-else so as not to pass any empty references

      // if (action.NewGameName=="") {
      //     return state
      // }

      if (action.NewGameName.match(/^([a-zA-Z])+$/)) {
        //.match(Match-Conditions)
        return {
          ...state /* ..state Stores the previous state so that the issue of only one change allowed at a time and the state is reversed back is solved */,
          // Here, State stores initial data and remains unreset throughout
          game_name: action.NewGameName,
        };
      }

      // else{
      //     return{
      //     ...state,    /* ..state Stores the previous state so that the issue of only one change allowed at a time and the state is reversed back is solved */
      //     // Here, State stores initial data and remains unreset throughout
      //     game_name: action.NewGameName
      // }
      // }
      else {
        return state;
      }

    case "UPDATE_PLAYER":
      // return {
      //     ...state,  /* This Allows us to change multiple cases and store the previous change as new default  */
      //     player_name: action.NewPlayerName
      // }

      // if (action.NewPlayerName=="") {
      //     return state
      // }

      // else{
      //     return{
      //     ...state,  /* This Allows us to change multiple cases and store the previous change as new default  */
      //     player_name: action.NewPlayerName
      // }
      // }

      //This will allow us to only pass Text and Not anything Else

      if (
        action.NewPlayerName.match(/^[a-zA-Z]+[ ]+[a-zA-Z]+$/) ||
        action.NewPlayerName.match(/^[a-zA-Z]+$/) ||
        action.NewPlayerName.match(/^[a-zA-Z]+[ ]+[a-zA-Z]+[ ]+[a-zA-Z]+$/)
      ) {
        return {
          ...state /* This Allows us to change multiple cases and store the previous change as new default  */,
          player_name: action.NewPlayerName,
        };
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default gamereducer;
