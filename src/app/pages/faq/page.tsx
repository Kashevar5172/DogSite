"use client";

import { Header } from "@/components/header/header";
// import { Items } from "@/components/Header/images/logo";
import React, { useState } from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;

  background-color: #ffffff;

  max-width: 100%;
  height: 100%;
`;


const Test = () => {

  return (
    <div>
      <Header />
      <StyledMain>
        U hu
      </StyledMain>
    </div>
  );
};


export default Test;
