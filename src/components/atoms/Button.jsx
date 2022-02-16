import React from "react";
import "../../App.css";
import {GameContext} from "../../App";

const Boton = ({ options, isValid }) => {

    const {handleNextQuestion}= React.useContext(GameContext);


    const handleClick = () => {
        handleNextQuestion();
    };

    

  return (
    <button onClick={handleClick} className="button">
      <p>{options}</p>
    </button>
  );
};

export default Boton;
