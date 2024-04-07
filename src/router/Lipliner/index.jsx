import  { useState, useEffect } from "react";
import "./lipliner.css";
import Footer from "../../components/Footer";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useDispatch} from 'react-redux'

const Lipliner = () => {
  const dispetch = useDispatch();
  const [products, setProduct] = useState([]);
const [loading, setLoading] = useState(true);

  const handleLikeProduct = (product)=> {
      dispetch({type: "LIKE_PRODUCT", product})
  }
  const addToCart = (products) => {
    products.count = 1
    dispetch({type: "ADD_TO_CART", products})
  }

  console.log(products)

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lip_liner")
        .then((response) => response.json())
        .then((newresponse) => {
          setProduct(newresponse);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 1200); 

    return () => clearTimeout(timeout);
  }, []);
return (
  <div>
  {loading ? (
    <div className="loader"></div>
  ) : (
    <div className="laylo">
    {products.map((pro) => (
      <Card className='pro' sx={{ maxWidth: 356 }} key={pro.id}>
        <CardActions className="btn_icon" disableSpacing>
            <IconButton onClick={() => handleLikeProduct(products)}   aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
      </CardActions>
      <CardMedia
      className="CardMedia"
        component="img"
        height="194"
        image={pro.api_featured_image}
        style={{ objectFit: 'contain' }}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant='h4' className='card-title'>
          {pro.name}
        </Typography>
        <Typography variant="p" color="text.secondary">
          Price:{pro.price}
        </Typography>
         <button onClick={() => addToCart(pro)} className="btn1">Add To Bag</button>
      </CardContent>
    </Card>
    ))}
    <Footer/>
  </div>
  )}
</div>
)
};

export default Lipliner;
