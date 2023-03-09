import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './newApi.css'
import { useSearchParams } from 'react-router-dom'
import { Navigation } from 'react-router-dom'
import def from "./breaking-news.jpg"

import Card from '@mui/material/Card'
import  CardActions  from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import  CardMedia  from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import { Link } from 'react-router-dom'

function NewsApi() {

     const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e90757421d5841338389f6c98d12211a`)
        .then((response)=>{
            setData(response.data.articles)
        })
    },[])
  return (
    <div className='CardDiv'>
        {data.map((item,i)=>
        <div key={i}>
        <Card sx={{maxWidth:250}} className='card'>
            <CardMedia
            component={'img'}
            height='140'
            image={item.urlToImage===null?def:item.urlToImage}
            alt=''
            key={i}
            />
            <CardContent>
                <Typography>{item.title}</Typography>
            </CardContent>
            <CardActions>
            <Link to='/detailsPage' state={{image:item.urlToImage,title:item.title,description:item.description}}><Button>More Details</Button></Link>
            </CardActions>
            </Card>
        </div>
)}
    </div>
  )
}

export default NewsApi





/*
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './newApi.css'
import { useSearchParams } from 'react-router-dom'
import { Navigation } from 'react-router-dom'

import Card from '@mui/material/Card'
import  CardActions  from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import  CardMedia  from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import { Link } from 'react-router-dom'

function NewsApi() {

     const [data,setData] = useState([]);
     const [searchParams,setSearchParams] = useSearchParams();

    // useEffect(()=>{
    //     axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=e90757421d5841338389f6c98d12211a`)
    //     .then((response)=>{
    //         setData(response.data)
    //     })
    // },[])

    useEffect(()=>{
            axios.get(`https://fakestoreapi.com/products`)
            .then((response)=>{
                setData(response.data)
            })
        },[])

  return (
    <div className='CardDiv'>
        {data.map((item,i)=>
        <div >
        <Card sx={{maxWidth:250}} className='card'>
            <CardMedia
            component={'img'}
            height='140'
            image={item.image}
            alt=''
            key={i}
            />
            <CardContent>
                <Typography>{item.title}</Typography>
            </CardContent>
            <CardActions>
            <Link to='/detailsPage' state={{image:item.image,title:item.title,price:item.price,description:item.description}}><Button>More Details</Button></Link>
            </CardActions>
            </Card>
        </div>
)}
    </div>
  )
}

export default NewsApi
*/