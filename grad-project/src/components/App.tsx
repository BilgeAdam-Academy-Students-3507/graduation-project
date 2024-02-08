import { Provider, useGradContext } from '../context'
import Card from './Card'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { GlobalStyles } from './GlobalStyles'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  weight: '400',
  subsets: ['latin'],
})

const App: React.FC = () => {
  return (
    <Provider>
      <AppContent />
    </Provider>
  )
}

interface ThemeWrapperProps {
  children: React.ReactNode
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { currentTheme } = useGradContext()

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles theme={currentTheme === 'light' ? lightTheme : darkTheme} />
      {children}
    </ThemeProvider>
  )
}

const AppContent: React.FC = () => {
  return (
    <ThemeWrapper>
      <Header />
      <Carousel />
      <Card />
      <Footer />
    </ThemeWrapper>
  )
}

export default App
