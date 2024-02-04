import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { useGradContext } from '../context'

import classes from '../styles/Card.module.css'

interface Person {
  id: number
  fullName: string
  description: {
    en: string
    tr: string
  }
  linkedin: string
  github: string
  medium: string
  codePen: string
  codeSandBox: string
  portfolio: string
}

export default function ProfileCard() {
  const { peopleData, toggleLng, targetRef, addRef } = useGradContext()
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null)

  return (
    <div className="cardContainer">
      <div className="cardsHeader">
        <h1> {toggleLng ? 'About The Project' : 'Proje Hakkında'}</h1>
        <p style={{ marginTop: 30 }}>
          {toggleLng
            ? 'Our website is a platform that highlights the students who have completed the front-end development bootcamp. This website features a gallery of students, along with their names and a brief description of their profile. Visitors can browse through the gallery and learn more about each student by clicking on the provided links.'
            : 'Web sitemiz, front-end development eğitimini tamamlayan öğrencileri öne çıkaran bir platformdur. Bu web sitesinde öğrencilerin isimleri ve profillerinin kısa bir açıklamasıyla birlikte bir galeri yer almaktadır. Ziyaretçiler galeriye göz atabilir ve verilen bağlantılara tıklayarak her öğrenci hakkında daha fazla bilgi edinebilir.'}
        </p>
      </div>
      <div className={classes.container}>
        {peopleData.map((person: Person) => (
          <div className={classes.cardContainer} key={person.id}>
            <Card
              sx={{ width: '341px', borderRadius: '1rem' }}
              className={classes.card}
              onMouseEnter={() => setHoveredCardId(person.id)}
              onMouseLeave={() => setHoveredCardId(null)}
              ref={(element) => addRef(element!)}
            >
              <CardActionArea>
                <CardMedia
                  className={classes.cardImg}
                  component="img"
                  height="100"
                  image="/bilgeadamakademilogo.png"
                  alt="BilgeAdam Akademi Logosu"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    className="lightModeDescription"
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    {person.fullName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={
                      classes.cardDescription + ' ' + 'lightModeDescription'
                    }
                  >
                    {toggleLng ? person.description.en : person.description.tr}
                  </Typography>
                </CardContent>
              </CardActionArea>
              {hoveredCardId === person.id && (
                <CardActions
                  className={classes.linksArea + ' ' + 'cardActions'}
                >
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.linkedin}>
                      LinkedIn
                    </a>
                  </Button>
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.github}>
                      Github
                    </a>
                  </Button>
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.medium}>
                      Medium
                    </a>
                  </Button>
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.codePen}>
                      CodePen
                    </a>
                  </Button>
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.codeSandBox}>
                      CodeSandBox
                    </a>
                  </Button>
                  <Button size="small" color="primary">
                    <a target="_blank" href={person.portfolio}>
                      Portfolio
                    </a>
                  </Button>
                </CardActions>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
