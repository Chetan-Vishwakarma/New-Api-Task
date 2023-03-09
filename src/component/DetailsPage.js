import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import './newApi.css'
import def from "./breaking-news.jpg"

function DetailsPage() {
    const location = useLocation()
    const {image,title,description} = location.state
  return (
    <div className='DetailsPageDiv'>
        <h1>DetailsPage</h1>
        <div className='DetailsPage'>
        <Card sx={{maxWidth:700,height:500}}>
            <CardMedia
            component='img'
            height='300'
            image={image===null?def:image}
            
            />
            <CardContent>
                <Typography>
                    <Typography>Title : {title}</Typography>
                </Typography>
                <Typography>
                    <Typography>Description : {description===null?"Description is Not Found for this News.":description}</Typography>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    
  )
}

export default DetailsPage



/*
import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import './newApi.css'

function DetailsPage() {
    const location = useLocation()
    const {image,title,price,description} = location.state
  return (
    <div className='DetailsPageDiv'>
        <h1>DetailsPage</h1>
        <div className='DetailsPage'>
        <Card sx={{maxWidth:700,height:500}}>
            <CardMedia
            component='img'
            height='300'
            image={image}
            />
            <CardContent>
                <Typography>
                    <h3>Title : {title}</h3>
                </Typography>
                <Typography>
                    <h4>Description : {description}</h4>
                </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
    
  )
}

export default DetailsPage
*/