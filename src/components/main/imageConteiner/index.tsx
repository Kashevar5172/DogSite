"use client";

import { useState } from "react";
import styled from "styled-components";

const WrapperImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 1200px;
  height: 600px;
  background-color: black;

  margin-bottom: 100px;
  border-radius: 100px;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  overflow: hidden;
`;

const StyledImage = styled.img<{ background?: string }>`
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.background})`}; //ERROR IN CONSOLE
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const FullImageContainer = styled.div`
  display: flex;
  justify-content: center;
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

const Text = styled.div`
  color: white;
  font-family: "Krona One", sans-serif;
  position: absolute;
  bottom: 20px; /* Регулируйте отступ снизу, чтобы разместить текст по вашему желанию */
  text-align: center;
  font-size: 30px;
  width: auto;
  background-color: #5c5a5a70;
`;

export const ImageConteiner = () => {
  const [showFullImage, setShowFullImage] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const userClick = (index: number) => {
    setShowFullImage(true);
    setSelectedImageIndex(index);
  };

  const images = [
    "/images/terier/Terier.png",
    "/images/spic.jpg",
    // "/images/terier/Terier.png",
    // "/images/terier/Terier.png",
    // "/images/terier/Terier.png",
    // "/images/terier/Terier.png",
  ];

  const imageTexts = [
    "Йоркширский терьер",
    "Померанский шпиц",
    // "Название изображения 3",
    // "Название изображения 4",
    // "Название изображения 5",
    // "Название изображения 6",
  ];

  return (
    <WrapperImageContainer>
      <ImageContainer>
        {images.map((image, index) => (
          <StyledImage
            key={index}
            background={image}
            onClick={() => userClick(index)}
          />
        ))}
        {showFullImage && selectedImageIndex !== null && (
          <FullImageContainer onClick={() => setShowFullImage(false)}>
            <FullImage src={images[selectedImageIndex]} />
            <Text>{imageTexts[selectedImageIndex]}</Text>
          </FullImageContainer>
        )}
      </ImageContainer>
    </WrapperImageContainer>
  );
};
