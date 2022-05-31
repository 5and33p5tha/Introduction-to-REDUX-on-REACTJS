import React, { useState } from "react";
import { useDispatch } from "react-redux";

//Can DO Independently Aswell import { useState } from 'react';

const UpdateGame = () => {
  //To Store What The Value in {'text'} is, we use useState
  const [gamename, setGamename] = useState("");

  //Now for Player
  const [playername, setPlayername] = useState("");

  const dispatch = useDispatch();

  return (
    <div>
      <input type={"text"} onChange={(e) => setGamename(e.target.value)} />
      {/* OnChange means if any changes occur, e= event i.e onchange, e.target.value is textbox area, this e.target.value is put into setGamename when change is triggered */}

      {/* <button onClick={()=>dispatch({type:'UPDATE_GAME',Payload:gamename })}>Update</button> */}

      {/* Payload is a custom variable used to store gamename. Payload stores the gamename and sends the value to gamereducer */}
      {/* You can put any name instead of payload like */}
      <button
        onClick={() => dispatch({ type: "UPDATE_GAME", NewGameName: gamename })}
      >
        Update Game Name
      </button>

      <br />
      <br />

      <input type={"text"} onChange={(e) => setPlayername(e.target.value)} />
      <button
        onClick={() =>
          dispatch({ type: "UPDATE_PLAYER", NewPlayerName: playername })
        }
      >
        Update Player Name
      </button>
    </div>
  );
};

export default UpdateGame;
