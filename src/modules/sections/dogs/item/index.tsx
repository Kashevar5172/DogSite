import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  object-fit: cover;
`;

const Wrapper = styled.div`
  margin: 40px auto auto;
  max-width: 100%;
`;

const StyledTextInBox = styled.div`
  font-family: "Krona One", sans-serif;
  color: ${(props) => props.theme.textColor};
  font-size: 30px;
  margin-left: 5px;
  -webkit-text-stroke: 0.5px black;
`;

const StyledLink = styled.div`
  font-family: "Krona One", sans-serif;
  width: 182px;
  color: #00900e;
  font-size: 22px;
  margin-left: 5px;
  text-shadow: #00000023 0 1px;
  cursor: pointer;
  &:hover{
    transition: 0.2s;
      color: ${(props) => props.theme.linkColor};
      stroke: black;
      stroke-width: 200px;
      stroke-linecap: butt;
  }
`;

const StyledImageContainer = styled.div`
  width: auto;
  overflow: hidden;
`;

const Dog = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${(props) => props.theme.backgroundDog};
`;

export interface ItemProps {
  text?: string;
  imageSrc?: string;
  link?: string;
}

export const Item: FC<ItemProps> = ({ text, imageSrc, link }) => {
  return (
    <Wrapper>
      <Dog>
        <StyledImageContainer>
          <StyledImage src={imageSrc} />
          <StyledTextInBox>{text} </StyledTextInBox>
          <Link href={link || ""} legacyBehavior>
              <StyledLink>Узнать больше {"➤"}</StyledLink>
          </Link>
        </StyledImageContainer>
      </Dog>
    </Wrapper>
  );
};
