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
  margin-bottom: 8%;
`;

const TableWrapper = styled.tr`
  background-color: ${(props) => props.theme.tableBackground};
  transition: 1s;
`;

const TableText = styled.td`
  padding: 8px;
  font-size: 18px;

  font-family: "Mont Regular";
  border: ${(props) => props.theme.tableBorder};
  font-size: 26px;
  color: ${(props) => props.theme.textColor};
  &:nth-child(even) {
    font-size: 30px;
  }
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
    <svg
      fill="#FFFFFF"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      stroke="#FFFFFF"
      strokeWidth="2"
    >
      <line x1="7" y1="7" x2="43" y2="43" />
      <line x1="43" y1="7" x2="7" y2="43" />
    </svg>
  );
};

const BoxStyledImage = styled.div`
  max-width: 1600px;
  height: 550px;
`;

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
          <FullImage src={imageFull} />
          <SvgStyle onClick={UserClick}>
            <ExSvg />
          </SvgStyle>
        </FullImageContainer>
      )}
    </div>
  );
};

export const FAQDog = styled.div`
  font-family: "Mont Medium";
  color: ${(props) => props.theme.textColor};
  font-size: 40px;
  font-weight: 500;
  margin: 1% 0% 1% 0px;
`;

export const DogName = styled.div`
  padding-top: 76px;
  color: ${(props) => props.theme.textColor};
  font-size: 46px;
  font-family: "Mont Regular";
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
