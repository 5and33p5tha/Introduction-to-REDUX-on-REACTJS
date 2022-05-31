// import React from 'react';
// import { useSelector } from 'react-redux';

// const DisplayGame = () => {
//     const game = useSelector(store => store)

//     // The player can also be difened as a new selector as
//     // const player = useSelector(store => store)
//     return (<>
//         {/* If store=> store then        <h1>The name of the game is {game.game_name}</h1>
//         <h1>The name of the game is {game}</h1> */}

//         {/* Now for multiple values in game */}

//         <h1>The name of the game is {game.game_name}</h1>
//         <h1>The name of the player is {game.player_name}</h1>
//     </>
//     );
// };

// export default DisplayGame;

//To Combine Stores
import React from "react";
import { useSelector } from "react-redux";

const DisplayGame = () => {
  const game = useSelector((store) => store.gameValue);

  // The player can also be difened as a new selector as
  // const player = useSelector(store => store)
  return (
    <>
      {/* If store=> store then        <h1>The name of the game is {game.game_name}</h1>
        <h1>The name of the game is {game}</h1> */}

      {/* Now for multiple values in game */}

      <h1>The name of the game is {game.game_name}</h1>
      <h1>The name of the player is {game.player_name}</h1>
    </>
  );
};

export default DisplayGame;