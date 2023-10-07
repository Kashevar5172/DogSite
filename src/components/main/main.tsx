import styled from "styled-components";
import Link from "next/link";
import { ContainerName } from "./containerName";
import { ImageConteiner } from "./imageConteiner";
import { About } from "./about";
import { FC, useEffect, useRef, useState } from "react";
import { dogData } from "./mass";

///images/main/background.jpg

export const StyledMain = styled.section`
  display: flex;

  flex-wrap: wrap;

  justify-content: center;
  flex-direction: column;

`;

const StyledImage = styled.img`
  width: 100%;
  height: 250px;
  display: block;
  object-fit: cover;
`;

const StyledDog = styled.div`
  margin: 40px auto auto;
  max-width: 100%;
`;

const StyledTextInBox = styled.div`
  font-family: "Krona One", sans-serif;
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

const FFWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface DogProps {
  text?: string;
  imageSrc?: string;
  link?: string;
}

const FF: FC<DogProps> = ({ text, imageSrc, link }) => {
  return (
    <StyledDog>
      <Dog>
        <StyledImageContainer>
          <StyledImage src={imageSrc} />
          <StyledTextInBox>{text} </StyledTextInBox>
          <Link href={link || ""} legacyBehavior>
            <div>
              <StyledLink>Узнать больше {"➤"}</StyledLink>
            </div>
          </Link>
        </StyledImageContainer>
      </Dog>
    </StyledDog>
  );
};


const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;

  background-color: #5c5a5a;
  gap: 10px;
  padding: 5px;

  font-size: 50px;
  color: white;
`;

const ImageBackgroundd = styled.img`
  width: 100%;
  height: 100%;
  background-position: cover; // Центрируем изображение по горизонтали и вертикали
  position: relative; // Устанавливаем позицию в relative, чтобы дочерние элементы могли быть размещены поверх фона
  z-index: 1; // Устанавливаем z-index, чтобы фон был "под" другими элементами
`;


export const Main: FC = () => {
  const [containers, setContainers] = useState<DogProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const itemsPerPage: number = 9;
  const isLoading = useRef<boolean>(false);

  useEffect(() => {
    // Функция для загрузки контейнеров
    const loadMoreContainers = () => {
      if (isLoading.current) return;

      isLoading.current = true;

      // Моделируем загрузку данных из массива данных
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const newContainers = dogData.slice(startIndex, endIndex);

      setContainers((prevContainers) => [...prevContainers, ...newContainers]);
      setPage((prevPage) => prevPage + 1);

      isLoading.current = false;
    };

    const handleScroll = () => {
      const windowHeight: number = window.innerHeight;
      const documentHeight: number = document.documentElement.scrollHeight;
      const scrollTop: number =
        window.scrollY || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 100) {
        loadMoreContainers();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <StyledMain>
      <ContainerName />
      <ImageConteiner />
      <About />
      <StyledHeaderWrapper>Собаки</StyledHeaderWrapper>
      <FFWrapper>
        {containers.map((container, index) => (
          <FF
            key={index}
            text={container.text}
            imageSrc={container.imageSrc}
            link={container.link}
          />
        ))}
        {isLoading.current}
        {/*&& <p>Loading...</p>*/}
      </FFWrapper>
    </StyledMain>
  );
};
