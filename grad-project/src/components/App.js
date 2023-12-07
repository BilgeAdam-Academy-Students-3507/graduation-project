import { Provider, useGradContext } from '../context'
import Card from './Card'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { GlobalStyles } from './GlobalStyles'

const App = () => {
  return (
    // Provider ile tüm uygulama içinde context'i kullanabiliriz
    <Provider>
      <AppContent />
    </Provider>
  )
}
// Tema ve global stilleri yöneten bileşen
const ThemeWrapper = ({ children }) => {
  const { currentTheme } = useGradContext()

  return (
    // ThemeProvider ile mevcut temayı belirliyoruz
    // GlobalStyles ile global stilleri uyguluyoruz
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

const AppContent = () => {
  return (
    // Tüm içeriği ThemeWrapper ile sarmalıyoruz
    // Bu sayede tüm içerik temayı ve global stilleri kullanabilir
    <ThemeWrapper>
      <Header />
      <Carousel />
      <Card />
      <Footer />
    </ThemeWrapper>
  )
}

export default App
