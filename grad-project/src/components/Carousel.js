import { gradContext } from '@/context'
import { useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const { peopleData } = useContext(gradContext)
  const settings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Slider {...settings} style={{ marginTop: '10rem' }}>
      <div>
        <h3>
          <img src={peopleData[0].img} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          {' '}
          <img src={peopleData[0].img} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          {' '}
          <img src={peopleData[0].img} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          {' '}
          <img src={peopleData[0].img} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          {' '}
          <img src={peopleData[0].img} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          {' '}
          <img src={peopleData[0].img} alt="" />
        </h3>
      </div>
    </Slider>
  )
}
export default Carousel
