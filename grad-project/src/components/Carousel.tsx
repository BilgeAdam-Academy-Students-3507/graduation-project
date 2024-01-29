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
    responsive: [
      {
        breakpoint: 1100, // Ekran genişliği 1100px'e düştüğünde
        settings: {
          slidesToShow: 3, // 1100px ve altındaki ekranlarda gösterilecek slayt sayısı
          slidesToScroll: 3, 
        },
      },
      {
        breakpoint: 768, // Ekran genişliği 768px'e düştüğünde
        settings: {
          slidesToShow: 2, // 768px ve altındaki ekranlarda gösterilecek slayt sayısı
          slidesToScroll: 2, 
        },
      },
      {
        breakpoint: 480, // Ekran genişliği 480px'e düştüğünde
        settings: {
          slidesToShow: 1, // 480px ve altındaki ekranlarda gösterilecek slayt sayısı
          slidesToScroll: 1, 
        },
      },
    ],
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
