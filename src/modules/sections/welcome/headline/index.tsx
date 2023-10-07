"use client";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 400px;
  margin: 100px;
`;

const StyledHeadline = styled.div`
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  font-size: 240px;
  color: white;
  margin-right: 10px;
  letter-spacing: -16px;
  text-shadow: #00000030 -20px 0px 0px;
`;

export const Headline = () => {
  return (
    <ContainerWrapper>
      <Container>
        <StyledHeadline>DOG SITE</StyledHeadline>
      </Container>
    </ContainerWrapper>
  );
};
