import React from "react";
import { LoadingDiv } from "../../all-styled";
import { RotatingSquare } from "react-loader-spinner";
import { colorsPalette } from "../../constants";
const Loading = () => {
  return (
    <LoadingDiv>
      <RotatingSquare
        height="100"
        width="100"
        color={colorsPalette[1]}
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadingDiv>
  );
};

export default Loading;
