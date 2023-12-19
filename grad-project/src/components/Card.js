import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import classes from '../styles/Card.module.css'

import { Button, CardActionArea, CardActions } from '@mui/material'
import { useGradContext } from '@/context'
import { useState } from 'react'

export default function ProfileCard() {
  const { peopleData, toggleLng } = useGradContext()
  const [hoveredCardId, setHoveredCardId] = useState(null)
  return (
    <div className={classes.container}>
      {peopleData.map((person) => (
        <div className={classes.cardContainer} key={person.id}>
          <Card
            sx={{ width: 400 }}
            className={classes.card}
            onMouseEnter={() => setHoveredCardId(person.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <CardActionArea>
              <CardMedia
                className={classes.cardImg}
                component="img"
                height="140"
                image="/ba-favicon.png"
                alt="green iguana"
              />
              <CardContent className={classes.cardContent}>
                <Typography
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
                  className={classes.cardDescription}
                >
                  {toggleLng ? person.description.en : person.description.tr}
                </Typography>
              </CardContent>
            </CardActionArea>
            {hoveredCardId === person.id && (
              <CardActions className={classes.linksArea}>
                <Button size="small" color="primary">
                  LinkedIn
                </Button>
                <Button size="small" color="primary">
                  GitHub
                </Button>
                <Button size="small" color="primary">
                  Medium
                </Button>
                <Button size="small" color="primary">
                  CodePen
                </Button>
                <Button size="small" color="primary">
                  CodeSandbox
                </Button>
                <Button size="small" color="primary">
                  Portfolio
                </Button>
              </CardActions>
            )}
          </Card>
        </div>
      ))}
    </div>
  )
}
