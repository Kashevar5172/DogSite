import {FC} from "react"
import styled from "styled-components";


const StyledImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 5px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;



export interface ItemProps {
    imageSrc: string;
  }
  
  export const Item: FC<ItemProps> = ({ imageSrc }) => {
    return (
      <div>
        <StyledImage src={imageSrc}/>
      </div>
    );
  };