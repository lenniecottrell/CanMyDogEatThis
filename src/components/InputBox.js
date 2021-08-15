import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const InputBox = ({ setAnswerText }) => {
  const acceptableItems = ["blueberries", "lettuce", "carrots"];
  const offLimits = ["grapes", "chocolate", "onion"];
  let [results, setResults] = useState("");

  const handleSubmit = (event) => {
    setAnswerText(event.target.value);
  };

  const handleInputChange = (event) => {
    let newValue = event.target.value;
    setResults(newValue);
  };

  // useEffect(() => {
  //   console.log("effect is run");
  // }, [results]);

  return (
    <InputContainer>
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Enter a food"
          value={results}
          onChange={handleInputChange}
        ></input>
        <button className="search-button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
      <div>{results}</div>
    </InputContainer>
  );
};

export default InputBox;

const InputContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;
