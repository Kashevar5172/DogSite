import { createGlobalStyle } from "styled-components";

export const themeName = {
  light: {
    backgroundColor: "#5c5a5a",
  },
  dark: {
    backgroundColor: "#000000",
  },
};

export const GlobalStyles = createGlobalStyle`
  #__next {
   position: relative;
  }
  
  html, body {
  width: 100%;
    margin: 0;
  scroll-behavior: smooth;

    color: #000;
    font-family: Manrope, sans-serif;
    font-size: 16px;

    * {
    margin: 0;
    padding: 0;
    
  }
 ${(themeProps) => {
   switch (themeProps.theme) {
     case themeName.light:
       return themeName.light;
     default:
       return themeName.dark;
   }
 }};
 
 #root{
  height: 100%;
 }}
 ;
`;
