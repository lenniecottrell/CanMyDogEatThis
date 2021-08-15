import "./App.css";
import InputBox from "./components/InputBox";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [answerText, setAnswerText] = useState("Results go here");
  return (
    <TitleWrapper>
      <h1 className="title">Can My Dog Eat This?</h1>
      <InputBox setAnswerText={setAnswerText} />
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid blue;
  padding: 1rem;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
`;

export default App;
