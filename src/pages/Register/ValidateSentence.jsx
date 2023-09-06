import React from "react";
import { Error, Check } from "@mui/icons-material";
import styled from "styled-components";

const ValidationsParagraph = styled.p`
  font-size: 14px;
  color: #00000099;
  margin: 3px 0px;
`;
const ValidateSentence = ({sentence , expression}) => {
  return (
    <ValidationsParagraph className="d-flex a-center g-10">
      {expression ? (
        <Check className="success" />
      ) : (
        <Error className="error" />
      )}
      <small>{sentence}</small>
    </ValidationsParagraph>
  );
};

export default ValidateSentence;
