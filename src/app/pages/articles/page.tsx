"use client";

import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div<{ boxWidth: number }>`
  width: ${(props) => props.boxWidth}px;
  height: ${(props) => props.boxWidth}px;
  background-color: red;
`;

export const StyledMain = styled.div`
  background-image: url("/images/background.jpg");
  background-position: center;
  background-size: cover;
  height: 140vh;
`;

const Articles = () => {
  const [boxWidth, setBoxWidth] = useState(400);

  const clear = () => {
    setBoxWidth((prevWidth) => (prevWidth === 100 ? 400 : 100));
  };

  return (
    <></>
  );
};

export default Articles;
