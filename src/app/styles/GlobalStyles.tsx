import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  textColor: "#000000",
};

export const darkTheme = {
  textColor: "#ffffff",
};

// light: {
//   backgroundColor: "#ffffff",
//   color: "#000000",
//   header: {
//     backgroundColor: "#5c5a5a",
//     color: "#ffffff",
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
    font-family: Manrope, sans-serif;
    font-size: 16px;

    * {
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
