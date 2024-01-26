import React, { useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { gradContext, GradContextValue } from '../context'

interface Person {
  id: number
  fullName: string
  img: string
}

const Carousel: React.FC = () => {
  const { peopleData, handleScroll } = useContext(
    gradContext
  ) as GradContextValue

  const settings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <Slider className="slider" {...settings}>
      {peopleData.map((people: Person) => (
        <div key={people.id}>
          <h3>
            <img
              width={300}
              height={300}
              src={people.img}
              alt={people.fullName}
              onClick={() => handleScroll(people.id)}
            />
          </h3>
        </div>
      ))}
    </Slider>
  )
}

export default Carousel
