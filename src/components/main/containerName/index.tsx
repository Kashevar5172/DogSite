"use client";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 100%;
  height: 400px;
  background-color: #a3a3a3;
  margin: 100px;
`;

const SiteName = styled.div`
  font-family: "Krona One", sans-serif;
  font-weight: bold;
  font-size: 240px;
  color: white;
  margin-right: 10px;
  letter-spacing: -16px;
  text-shadow: #00000030 -20px 0px 0px;
`;

export const ContainerName = () => {
  return (
    <ContainerWrapper>
      <Container>
        <SiteName>DOG SITE</SiteName>
      </Container>
    </ContainerWrapper>
  );
};
