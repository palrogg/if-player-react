

import { createGlobalStyle } from "styled-components/macro";

//try https://scotch.io/@micwanyoike/how-to-add-fonts-to-a-react-project

export const GlobalStyles = createGlobalStyle`



html {
  box-sizing: border-box;
}

 
@import url(https://fonts.googleapis.com/css?family=Jacques+Francois+Shadow|Rye|Yesteryear|VT323|Lato);
body {
	font-family: 'VT323', monospace;
	font-family: 'Lato', sans-serif;
	font-size:14px;
	letter-spacing: 1px;
	line-height: 18px;
	background-color: ${props => theme.BACKGROUND_COLOR};
	color: ${props => theme.TEXT_COLOR};
	/* GOOD IDEA TO MAKE TEXT UNSELECTABLE?? */
	-webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
`;



const blackGoldTheme = {
  BACKGROUND_COLOR: "#1a1a1a",
  TEXT_COLOR: "#F8F8F8",
  HIGHLIGHT_COLOR: "gold",
  BUTTON_TEXT_COLOR:"#000",
  BUTTON_DISABLED_TEXT_COLOR:"#333",
  BUTTON_ENABLED:"gold",
  BUTTON_DISABLED:"#666"
};
/*
const silverTheme = {
    BACKGROUND_COLOR: "#e0e0e0",
    TEXT_COLOR: "#1a1a1a",
    HIGHLIGHT_COLOR: "#000",
    BUTTON_TEXT_COLOR:"#000",
    BUTTON_ENABLED:"#FFF",
    BUTTON_DISABLED:"#333"
  };
  */

export const theme = blackGoldTheme;

