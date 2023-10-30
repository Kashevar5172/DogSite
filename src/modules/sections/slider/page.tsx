"use client";
import React, { FC } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledPage = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
`;

interface SliderProps {
  settings: SliderSettings;
  slides: React.ReactNode[];
}

interface SliderSettings {
  dots: boolean;
  arrows: boolean;
  speed: number;
  autoplay: boolean;
  autoplaySpeed: number;
}

const MysSlider: FC<SliderProps> = ({ settings, slides }) => {
  return (
    <StyledPage>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Slider>
    </StyledPage>
  );
};

const StyledSlider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const settings: SliderSettings = {
  dots: true,
  arrows: false,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
};

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 1440px;
  height: 700px;
  border-radius: 100px;
  display: flex;
  overflow: hidden;
`;

const SlideWithImage = ({ imageSrc }: { imageSrc: string }) => (
  <StyledSlider>
    <ImageContainer>
      <StyledImage src={imageSrc} />
    </ImageContainer>
  </StyledSlider>
);

const slides = [
  <SlideWithImage imageSrc="/images/dogs/terier/img.png" />,
  <SlideWithImage imageSrc="/images/dogs/spic/img.jpg" />,
];

const MySlider = () => {
  return <MysSlider settings={settings} slides={slides} />;
};

export default MySlider;
