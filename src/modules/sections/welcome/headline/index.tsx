"use client";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  width: 46%;
  height: 400px;
  margin: 92px 0px;
`;

const StyledHeadline = styled.div`
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  font-size: 100px;
  color: white;
  letter-spacing: -8px;
  margin-top: 20px;
  margin-right: 6%;
  text-shadow: #00000030 -20px 0px 0px;
`;

const StyledHeadlinesecond = styled.div`
  font-size: 40px;
  color: white;
  margin-bottom: 20%;
  margin-right: 6%;
  letter-spacing: -2px;
`;

export const Headline = () => {
  return (
    <ContainerWrapper>
      <Container>
        <StyledHeadline>DOG SITE</StyledHeadline>
        <StyledHeadlinesecond>
          краткий справочник про собак
        </StyledHeadlinesecond>
      </Container>
    </ContainerWrapper>
  );
};
