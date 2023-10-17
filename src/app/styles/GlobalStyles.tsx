import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  textColor: "#000000",
  backgroundImage: "url('/images/background/whiteWood.png')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  transition: "0.5s",

  backgroundDog: "#adadad50",
  linkColor :"#ff5656",

  tableBackground: "#ffffff75",
  tableBorder: "1px solid #000000",

  backgroundHeader: "#4f4f4f2f",
};

export const darkTheme = {
  textColor: "#ffffff",
  backgroundImage: "url('/images/background/blackWood.png')",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  transition: "0.5s",

  backgroundDog: "#bdbbbb20",
  linkColor :"#00ff1a",

  tableBackground: "#00000075",
  tableBorder: "1px solid #ffffff",

  backgroundHeader: "#ffffff30",
};

// light: {
//   backgroundColor: "#ffffff",
//   color: "#000000",
//   header: {
//     backgroundColor: "#5c5a5a",
//     color: "#ffffff",z
//   },
// },
// dark: {
//   backgroundColor: "#ffffff",
//   color: "#000000",
//   header: {
//     backgroundColor: "#000000",
//     color: "#ffffff",
//     svg: {
//       path: {
//         stroke: "#ffffff",
//         "stroke-width": "200px",
//         "stroke-linecap": "butt",
//       },
//     },
//   },
// },

export const GlobalStyles = createGlobalStyle`
  #__next {
   position: relative;
  }
  
  html, body {
  width: 100%;
    margin: 0;
  scroll-behavior: smooth;
    color: #000;
    * {
    font-family: 'Krona One' sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
    
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
