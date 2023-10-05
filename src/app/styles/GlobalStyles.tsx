import { createGlobalStyle } from "styled-components";

export const themeName = {
  light: {
    backgroundColor: "#5c5a5a",
    color: "#ffffff",
    header: {
      backgroundColor: "#f50000",
      color: "#ffffff",
    },
  },
  dark: {
    backgroundColor: "#000000",
    color: "#ffffff",
    header: {
      backgroundColor: "#0055ff",
      color: "#ffffff",
    },
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
