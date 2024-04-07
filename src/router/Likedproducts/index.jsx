import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import CardActions from '@mui/material/CardActions'
import './likedproducts.css'

const Like = () => {
    const dispatch = useDispatch();
    const likeddate = useSelector(state => state.likeReducer.likes)
    const handleDisLikeProduct = (id) => {
       dispatch({type: "DISLIKE_PRODUCT", id})
    }

    console.log(likeddate)
  return (
    <div className="tom">
        {likeddate.map(prod => (
            <div key={prod.id}>
              <Card className='pro' sx={{ maxWidth: 356 }} >
            <CardActions className="btn_icon" disableSpacing>
                <IconButton onClick={() => handleDisLikeProduct(product.id)}  aria-label="add to favorites">
                  <HeartBrokenIcon />
                </IconButton>
          </CardActions>
          <CardMedia
          className="CardMedia"
            component="img"
            height="194"
            image={prod.api_featured_image}
            style={{ objectFit: 'contain' }}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant='h4' className='card-title'>
              {prod.name}
            </Typography>
            <Typography variant="p" color="text.secondary">
              Price:{prod.price}
            </Typography>
             <button className="btn1">Add To Bag</button>
          </CardContent>
        </Card>
            </div>
        ))}
      </div>
  )
}

export default Like