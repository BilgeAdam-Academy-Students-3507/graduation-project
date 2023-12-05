import { Provider } from '@/context'
import Card from './Card'
import Carousel from './Carousel'
import Footer from './Footer'
import Header from './Header'

const App = () => {
  return (
    <Provider>
      <Header />
      <Carousel />
      <Card />
      <Footer />
    </Provider>
  )
}
export default App
