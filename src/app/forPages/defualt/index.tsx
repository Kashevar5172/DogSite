import React, { FC } from 'react';
import { dogBreeds } from '..';
import { DogImage, DogName, DogText, FAQDog, StyledPage } from '@/components/componentsForPage\'s/base';

interface DogInfoProps {
  breedId: number;
}

export const DogInfoPage: FC<DogInfoProps> = ({ breedId }) => {
  const dogInfo = dogBreeds.find((dog) => dog.id === breedId)!;

  return (
    <StyledPage>
      <DogName>{dogInfo.name}</DogName>
      <DogImage imageSrc={dogInfo.imageSrc} imageFull={dogInfo.imageFull} />
      <FAQDog>Кратко о породе:</FAQDog>
      <DogText
        name={dogInfo.name}
        country={dogInfo.country}
        time={dogInfo.time}
        weight={dogInfo.weight}
        height={dogInfo.height}
        wool={dogInfo.wool}
        breed={dogInfo.breed}
        body={dogInfo.body}
      />
    </StyledPage>
  );
};
