import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
  font-family: 'Krona One', sans-serif;
  color: #000000;
  font-size: 30px;
  margin-left: 5px;
  -webkit-text-stroke: 0.5px black;
`;

const StyledLink = styled.div`
  color: #00900e;
  font-size: 22px;
  margin-left: 5px;
  text-shadow: #00000025 0 1px;
  cursor: pointer;
`;

const StyledImageContainer = styled.div`
  width: auto;
  overflow: hidden;
`;

const Dog = styled.div`
  width: 400px;
  height: 400px;
  background-color: #bdbbbb20;
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
          <Link href={link || ''} legacyBehavior>
            <div>
              <StyledLink>Узнать больше {'➤'}</StyledLink>
            </div>
          </Link>
        </StyledImageContainer>
      </Dog>
    </Wrapper>
  );
};
