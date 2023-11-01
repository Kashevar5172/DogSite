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
    
    @font-face {
      font-family: 'Krona One';
      src: url('/fonts/krona/KronaOne.ttf');
    }

    @font-face {
      font-family: 'Mont Bold';
      src: url('/fonts/montserrat/Bold.ttf');
    }

    @font-face {
      font-family: 'Mont Medium';
      src: url('/fonts/montserrat/Medium.ttf');
    }

    @font-face {
      font-family: 'Mont Regular';
      src: url('/fonts/montserrat/Regular.ttf');
    }

  #__next {
   position: relative;
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
