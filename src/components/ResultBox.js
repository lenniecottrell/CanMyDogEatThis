import React from "react";
import styled from "styled-components";

const ResultBox = ({ answerText }) => {
  return (
    <ResultsWrapper>
      <h2>{answerText}</h2>
    </ResultsWrapper>
  );
};

const ResultsWrapper = styled.div`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ResultBox;
