import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'


const InputBox = () => {
  const acceptableItems = ["blueberries", "lettuce", "carrots"];
  const offLimits = ["grapes", "chocolate", "onion"];
  
  
  const handleSubmit = (input) => {
    if (acceptableItems.indexOf(input) > -1) {
      console.log("okay!")
    } else if (offLimits.indexOf(input) > -1) {
      console.log("no go!")
    } else {
      console.log("option 3")
    }
    }
  
  
  return (
    <InputContainer>
      <input placeholder="Enter a food">
      </input>
      <button type="submit" onClick={() => handleSubmit()}>Submit</button>
    </InputContainer>
  )
}

export default InputBox

const InputContainer = styled.div`
border: 2px solid black;
display: flex;
flex-direction: column;
margin: 2rem;
padding: 1rem;
justify-content: center;
align-items: center;
`