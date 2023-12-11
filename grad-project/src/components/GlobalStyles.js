// GlobalStyles.js
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    
  }
  .navbar {
    background-color: ${(props) => props.theme.navbar};
    color: ${(props) => props.theme.text};
  }
  
  .footer {
    background-color: ${(props) => props.theme.footer};
    color: ${(props) => props.theme.text};
  }
`
