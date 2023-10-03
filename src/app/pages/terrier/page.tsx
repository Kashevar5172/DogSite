"use client";
import {
  DogImage,
  DogName,
  DogText,
  FAQDog,
  StyledPage,
} from "@/components/componentsForPage's/base";
import { Header } from "@/components/header/header";

export default function Terier() {
  return (
    <div>
      <Header />
      <StyledPage>
        <DogName>Йоркширский терьер</DogName>
        <DogImage
          imageSrc="/images/terier/Terier.png"
          imageFull="/images/terier/Terier.png"
        />
        <FAQDog>Кратко о породе:</FAQDog>
        <DogText
          name="Йоркширский терьер"
          country="Германия / Польша"
          time="~XVIII-XVIV век"
          weight="2,3 - 3 кг"
          height="20 см"
          wool="Плотная"
          breed="Игрушка"
          body="Квадрат"
        />
      </StyledPage>
    </div>
  );
}
