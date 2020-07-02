import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

export default function ImgMediaCard(props){
  const classes = useStyles()

  return (
    <Card style={{
      margin:'20px',
      borderRadius: '68px',
      background: '#53dbf3',
      boxShadow: 'inset -19px 19px 37px #3d71b4 , inset -19px -19px 37px #69c1ff',
    }} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <p> {props.title} </p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="secondary">
          Add to cart
        </Button>
        <Button size="small" color="secondary">
          Remove from cart
        </Button>
      </CardActions>
    </Card>
      // <article style={{
      //   width: '250px',
      //   padding: '16px',
      //   textAlign: 'center',
      //   border: '1px solid #eee',
      //   boxShadow: '0 2px 3px #ccc',
      //   margin: '10px',
      //   boxSizing: 'border-box',
      //   cursor:' pointer',
      //   textolor:'white',
      // }} onClick={props.clicked}>
      //     <h1>{props.title}</h1>
      //     <div className="Info">
      //         <div className="Author">{props.author}</div>
      //     </div>
      // </article>
  )
}