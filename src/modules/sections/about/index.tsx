"use client";

import styled from "styled-components";

const WrapperAbout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledAbout = styled.div`
  font-family: "Krona One", sans-serif;
  font-size: 26px;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;

const ConteinerAbout = styled.div`
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  font-size: 26px;
  text-align: center;
  margin-bottom: 100px;
`;

export const About = () => {
  return (
    <WrapperAbout>
      <StyledAbout>About</StyledAbout>
      <ConteinerAbout>
        IDK WHAT I WANNA TO TEXT HERE, IT'S FOR FUTURE
      </ConteinerAbout>
    </WrapperAbout>
  );
};
