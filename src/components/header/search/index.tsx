import styled from "styled-components";

export const StyledSearch = styled.div`
  display: flex;
  position: relative;
  width: 50%;
  height: 40px;
  background-color: #ffffff;
  border: 4px solid black;
`;

export const Search = styled.input`
  background-color: #ffffff;
  border: 0px;
  font-size: 24px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff;
  outline: none;
  &:focus {
    border-color: #00900e; /* Цвет рамки при фокусе */
    box-shadow: 0 0 24px #00900ebd; /* Эффект подсветки при фокусе */
  }
`;

export const StyledList = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 200px; 
  overflow-y: auto; 
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1; 
`;

export const TextInList = styled.div`
  font-size: 24px;
  color: black;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #00900e;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ccc;
    color: #00900e;
  }
`;
