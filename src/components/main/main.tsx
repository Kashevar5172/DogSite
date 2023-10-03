import styled from "styled-components";
import Link from "next/link";
import { ContainerName } from "./containerName";
import { ImageConteiner } from "./imageConteiner";
import { About } from "./about";


export const StyledMain = styled.div`
  display: flex;

  background-color: #ffffff;
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
  margin: 40px auto auto; //2-e auto за расстояние
  max-width: 100%;
  /* margin-right: auto; */
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
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

//#d9d9d9



const Dog = styled.div`
width: 400px;
height: 400px;
background-color: #bdbbbb20;
`

interface DogProps {
  text?: string;
  imageSrc?: string;
  link?: string;
}

const FF: React.FC<DogProps> = ({ text, imageSrc, link }) => {
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

export const Main = () => {
  return (
    <StyledMain>
      <ContainerName />
      <ImageConteiner/>
      <About />
      <StyledHeaderWrapper>Блоки собак</StyledHeaderWrapper>
      <FF link="" />
      {/* <FF 
        text="Померанский шпиц (Медвежьего типа)"
        imageSrc="/images/terier/Terier.png"
        link="/pages/Terrier"
        />
      <FF imageSrc="/images/spic.jpg"
      text="Авот"
      />
      <FF/>  */}
    </StyledMain>
  );
};
