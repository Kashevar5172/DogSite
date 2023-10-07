"use client";
import { useState } from "react";
import { styled } from "styled-components";

interface ForDogText {
  name?: string;
  country?: string;
  time?: string;
  weight?: string;
  height?: string;
  wool?: string;
  breed?: string;
  body?: string;
}
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableWrapper = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableText = styled.td`
  padding: 8px;
  font-size: 18px;
  border: 1px solid #ddd;
`;

export const DogText: React.FC<ForDogText> = ({
  name,
  country,
  time,
  weight,
  height,
  wool,
  breed,
  body,
}) => {
  return (
    <Table>
      <tbody>
        <TableWrapper>
          <TableText>Название породы</TableText>
          <TableText>{name}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Страна происхождения</TableText>
          <TableText>{country}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Время происхождения породы</TableText>
          <TableText>{time}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Вес</TableText>
          <TableText>{weight}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Рост в холке</TableText>
          <TableText>{height}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Вид шерсти</TableText>
          <TableText>{wool}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Тип породы</TableText>
          <TableText>{breed}</TableText>
        </TableWrapper>
        <TableWrapper>
          <TableText>Тип корпуса</TableText>
          <TableText>{body}</TableText>
        </TableWrapper>
      </tbody>
    </Table>
  );
};

export const ExSvg = () => {
  return (
    <svg fill="#FFFFFF" viewBox="0 0 50 50" width="50px" height="50px">
      <line
        fill="none"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="7"
        y1="7"
        x2="43"
        y2="43"
      />
      <line
        fill="none"
        stroke="#FFFFFF"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="43"
        y1="7"
        x2="7"
        y2="43"
      />
    </svg>
  );
};

export const Arrow = () => {
  return (
    <svg
      x="0px"
      y="0px"
      width="auto"
      height="auto"
      viewBox="0 0 292.359 292.359"
    >
      <g>
        <path
          fill="white"
          d="M222.979,5.424C219.364,1.807,215.08,0,210.132,0c-4.949,0-9.233,1.807-12.848,5.424L69.378,133.331
		c-3.615,3.617-5.424,7.898-5.424,12.847c0,4.949,1.809,9.233,5.424,12.847l127.906,127.907c3.614,3.617,7.898,5.428,12.848,5.428
		c4.948,0,9.232-1.811,12.847-5.428c3.617-3.614,5.427-7.898,5.427-12.847V18.271C228.405,13.322,226.596,9.042,222.979,5.424z"
        />
      </g>
    </svg>
  );
};

export const RotateArrow = () => {
  return (
    <svg viewBox="0 0 292.359 292.359" height="auto" width="auto">
      <g transform="matrix(-1 0 0 -1 292.359 292.359)">
        <path
          fill="white"
          d="M222.979,5.424C219.364,1.807,215.08,0,210.132,0c-4.949,0-9.233,1.807-12.848,5.424L69.378,133.331
            c-3.615,3.617-5.424,7.898-5.424,12.847c0,4.949,1.809,9.233,5.424,12.847l127.906,127.907c3.614,3.617,7.898,5.428,12.848,5.428 
            c4.948,0,9.232-1.811,12.847-5.428c3.617-3.614,5.427-7.898,5.427-12.847V18.271C228.405,13.322,226.596,9.042,222.979,5.424z"
        />
      </g>
    </svg>
  );
};

const BoxStyledImage = styled.div`
 max-width: 1600px;
 height: 550px;
`

const StyledImage = styled.img`
  width: 100%;
  border-radius: 50px;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 1;
`;

const FullImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const FullImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const SvgStyle = styled.div`
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  z-index: 9998;
  cursor: pointer;
`;

const StyledSvgStrelkaVlevo = styled.div`
  width: 50px;
  z-index: 9998;
`;

interface ForDogImage {
  imageSrc?: string;
  imageFull?: string;
  imageNext?: string;
}

export const DogImage: React.FC<ForDogImage> = ({ imageSrc, imageFull }) => {
  const [showfullImage, setshowfullImage] = useState(false);

  const UserClick = () => {
    setshowfullImage(!showfullImage);
  };

  return (
    <div>
      <BoxStyledImage>
      <StyledImage src={imageSrc} onClick={UserClick} />
      </BoxStyledImage>
      {showfullImage && (
        <FullImageContainer>
          <StyledSvgStrelkaVlevo>
            <Arrow />
          </StyledSvgStrelkaVlevo>
          <FullImage src={imageFull} />
          <SvgStyle onClick={UserClick}>
            <ExSvg />
          </SvgStyle>
          <StyledSvgStrelkaVlevo>
            <RotateArrow />
          </StyledSvgStrelkaVlevo>
        </FullImageContainer>
      )}
    </div>
  );
};

export const FAQDog = styled.div`
  color: #000000;
  font-size: 40px;
  font-weight: 500;
  margin: 1% 0% 1% 0px;
`;

export const DogName = styled.div`
  font-size: 30px;
  font-family: "Krona One", sans-serif;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  -webkit-text-stroke: 0.1px black;
`;

export const StyledPage = styled.main`
  height: auto;
  flex-wrap: wrap;
  padding: 0px 48px;
`;
