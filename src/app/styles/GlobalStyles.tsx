import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  textColor: "#000000",
  backgroundImage: "url('/images/background/whiteWood.png')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",

  backgroundDog: "#adadad50",
  linkColor: "#ff0000",

  tableBackground: "#ffffff75",
  tableBorder: "1px solid #000000",

  backgroundHeader: "#4f4f4f2f",
};

export const darkTheme = {
  textColor: "#ffffff",
  backgroundImage: "url('/images/background/blackWood.png')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",

  backgroundDog: "#bdbbbb20",
  linkColor: "#00ff1a",

  tableBackground: "#00000075",
  tableBorder: "1px solid #ffffff",

  backgroundHeader: "#ffffff30",
};

export const GlobalStyles = createGlobalStyle`
  #__next {
   position: relative;
  }

  @font-face {
    font-family: 'Krona One';
    src: url('/fonts/KronaOne.ttf') format('truetype');
    font-weight: normal;
  }
  
  html, body {
  width: 100%;
  /* overflow-x: hidden; */
    
  scroll-behavior: smooth;
    color: #000;
    * {
    font-family: 'KronaOne', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    transition: color 0.5s, background-image 0.5s;
  }
  ${(themeProps) => {
    switch (themeProps.theme) {
      case lightTheme:
        return lightTheme;
      default:
        return darkTheme;
    }
  }};
 
 #root{
  height: 100%;
 }}
 ;
`;
