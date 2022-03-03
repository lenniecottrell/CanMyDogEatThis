import React from "react";
//import { useState } from "react";
import { useForm } from 'react-hook-form'

const InputBox = () => {
  //state
  // const [value, setValue] = useState("");
  // const [submitted, setSubmitted] = useState(false);
  

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
        <input className="submit-button" type="submit" value="Woof!"/>
      </form>
  );
};

export default InputBox;