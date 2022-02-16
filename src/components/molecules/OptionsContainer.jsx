import React from "react";
import Boton from "../atoms/Button";
import '../../App.css';


const OptionsContainer = ({options}) => (
  <div className="options-container">
   {options.map((option, index) => (
      <Boton key={index} options={option} />
    ))}
  </div>
)

export default OptionsContainer;
