// App.js
import { Provider } from '@/context'
import Card from './Card'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './Theme'
import { GlobalStyles } from './GlobalStyles'

import { useState } from 'react'

const App = () => {
  const [currentTheme, setTheme] = useState('light') // light ilk başta açık olsun

  return (
    <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Provider>
        <Header setTheme={setTheme} />
        <Carousel />
        <Card />
        <Footer />
      </Provider>
    </ThemeProvider>
  )
}

export default App
