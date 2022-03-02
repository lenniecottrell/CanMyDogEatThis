import React from "react";
//import { useState } from "react";
import { useForm } from 'react-hook-form'

const InputBox = () => {
  //state
  // const [value, setValue] = useState("");
  // let [results, setResults] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  
  //lists of items
  // const acceptableItems = ["blueberries", "lettuce", "carrots"];
  // const offLimits = ["grapes", "chocolate", "onion"];

  //event handlers
const {register, handleSubmit} = useForm();

  //JSX
  return (
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          {...register('submission')}
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          type="text"
          className="search-bar"
          placeholder="Enter a food"
        />
        <input className="submit-button" type="submit" />
      </form>
  );
};

export default InputBox;