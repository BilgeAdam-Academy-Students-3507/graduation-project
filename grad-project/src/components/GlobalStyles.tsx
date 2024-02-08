import { createGlobalStyle, DefaultTheme } from 'styled-components'

interface ThemeProps {
  theme: DefaultTheme
}

export const GlobalStyles = createGlobalStyle<ThemeProps>`
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
  .cardContainer {
    background-color: ${(props) => props.theme.cardContainer};
    color: ${(props) => props.theme.text};
  }
  .Card_card__JwV2g {
    background-color: ${(props) => props.theme.Card_card__JwV2g};
    color: ${(props) => props.theme.text};
  }
  .cardActions {
    background-color: ${(props) => props.theme.cardActions};
    color: ${(props) => props.theme.text};
  }
  .lightModeDescription {
    color: ${(props) => props.theme.lightModeDescription};
  }
`
