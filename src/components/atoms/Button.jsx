import React from "react";
import "../../App.css";
import { GameContext } from "../../App";

const Boton = ({ options }) => {
  const { handleNextQuestion } = React.useContext(GameContext);


  return (
    <button onClick={ () => handleNextQuestion ( options ) } className="button" >
      <p>{options.answerText}</p>
    </button>
  );
};

export default Boton;
