import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const InputBox = () => {
  const acceptableItems = ["blueberries", "lettuce", "carrots"];
  const offLimits = ["grapes", "chocolate", "onion"];
  const [value, setValue] = useState("");
  let [results, setResults] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const test = event.target.value;
    console.log(test);
    if (acceptableItems.indexOf(test) > -1) {
      setResults("dogs can have it");
    } else if (offLimits.indexOf(test) > -1) {
      setResults("not good for dogs");
    } else {
      setResults("there was an error");
    }
    setSubmitted(true);
  };

  // useEffect(() => {
  //   console.log("effect is run");
  // }, [results]);

  return (
    <FormContainer>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-bar"
          placeholder="Enter a food"
          value={value}
          onChange={handleInputChange}
        ></input>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {submitted ? (
        <ResultsWrapper>
          <h2>{results}</h2>
        </ResultsWrapper>
      ) : null}
    </FormContainer>
  );
};

export default InputBox;

const FormContainer = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`;

const ResultsWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
