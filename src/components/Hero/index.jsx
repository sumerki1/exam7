import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import './hero.scss'
import Footer from '../Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const Hero = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // ---------------------

  // const dispetch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?product_category=lip_gloss&product_type=lipstick")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }, [])

  // const handleLikeProduct = (product)=> {
  //     dispetch({type: "LIKE_PRODUCT", product})
  // }
  return (
    <>
      <div className='hero'>
        <div className='hero_wrapper'>
          <div className='hero_image'></div>
          <div className='div'>
            <div><h1 className='title'>OUR SPRING SALE IS ENDING...</h1></div>
            <p>Bag your beauty essentials for less, while you still can!</p>
            <button className='shop_btn'>Shop now</button>
          </div>
        </div>

        <div className='cards__container'>
          <main>
            <div class="card">
              <img src="https://hips.hearstapps.com/hmg-prod/images/best-mascara-1507581081.jpg?crop=0.888888888888889xw:1xh;center,top&resize=768:*" alt="" />
              <div class="card-content">
                <h2>
                  Mascara
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="Mascara" class="button">
                  Shop Now
                  <span class="material-symbols-outlined">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </main>
          <main>
            <div class="card">
              <img src="https://api.vogacloset.com/media/catalog/product/cache/884b564da8e6ee4676789bb050b005a7/B/F/BFBB0413F_1_1.jpg" alt="" />
              <div class="card-content">
                <h2>
                  Lipstick
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="/lipstick" class="button">
                  Shop Now
                  <span class="material-symbols-outlined">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </main>
          <main>
            <div class="card">
              <img src="https://images.beautybay.com/eoaaqxyywn6o/2iE2wWjS2qwACPzmth90E6/8d90a3863810048e63106ba96e2e521f/EPDP_Face_Palettes_5.jpg?fm=jpg&fl=progressive&w=700&q=75" alt="" />
              <div class="card-content">
                <h2>
                  Bronzer
                </h2>
                <a href="/bronzer" class="button">
                  Shop Now
                  <span class="material-symbols-outlined">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <h1 className='brand_main'><i>Shop by brand</i></h1>

      <div className="brand-wrapper">
        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://ucarecdn.com/e4f167c0-3509-41d1-a6d9-cafa92ff96e7/-/preview/ftORfcgu" alt="" />
          <br />
          <b className='brand_title'>By FENDY</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>
        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://pbs.twimg.com/media/Fn3A_eqaUAAEA0c.jpg" alt="" />
          <br />
          <b className='brand_title'>By MILANI</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>
        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://images.ctfassets.net/g8qtv9gzg47d/image_post_66872/26f400a6a0f1872d06158999109f6775/Slider_1_-_All_Things_W3LL_And_Good" alt="" />
          <br />
          <b className='brand_title'>By w3llpeople</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>
        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYUpeXQQ0K7M70H_hLAKNy3fPTTQe7-vNkvyb4GFS0gzB5Y3z3vtk5KA94tZkdxXtWb8&usqp=CAU" alt="" />
          <br />
          <b className='brand_title'>By NXY</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>

        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://fraguru.com/mdimg/perfume/375x500.32401.jpg" alt="" />
          <br />
          <b className='brand_title'>By REVLON</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>

        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://www.sallybeauty.com/on/demandware.static/-/Sites-SBS-SallyBeautySupply/default/dwca7b0f7c/images/large/CHNGLZ1.png" alt="" />
          <br />
          <b className='brand_title'>chine glaze</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>
        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://sanidabeauty.com/cdn/shop/articles/essie-nail-polish-feel-the-fizzle-spring-2023-collection-sanida-beauty.jpg?v=1681498613" alt="" />
          <br />
          <b className='brand_title'>By ESSIE</b>
          <br /> 
            <button className='brand_btn'>Shop now</button>
        </div>
        <div className='brands_wrapper'>
          <img width={200} className='brand_image' src="https://pbs.twimg.com/media/GC8IejHXQAAjzQX.jpg:large" alt="" />
          <br />
          <b className='brand_title'>By maybelline</b>
          <br />
            <button className='brand_btn'>Shop now</button>
        </div>
      </div>
      <h1 className='product_title'>PRODUCTS</h1>
      <div className='liked'>
        {products.slice(0, 15).map((product) => (
          <Card sx={{ maxWidth: 345 }} key={product.id} className='like'>
            <CardMedia
              component="img"
              height="194"
              image={product.api_featured_image}
              style={{ objectFit: 'contain' }}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant='h4' className='card-title'>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.brand}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.category}
              </Typography>
              <Typography variant="strong" color="text.secondary">
                Price: ${product.price}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
                  <IconButton onClick={() => handleLikeProduct(product)} aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton onClick={() => handleKorzina(product)} aria-label="add to favorites">
                    <ShoppingCartIcon />
                  </IconButton>
            </CardActions>
          </Card>
        ))
        }
      </div>
      <div className='line'></div>
    <div className='advert_wrapper'>
        <div className='advert_image'>
        <img className='advert' src="https://images.ctfassets.net/eoaaqxyywn6o/23v7jAi5uOXt4RqDG0vEQd/56f169f83be2ee479797a6baa08e5bef/MicrosoftTeams-image__67_.png" alt="" />
        </div>
        <div className='text_wrapper'>
          <h3 className='wrap_title'>Calling all Beauty Obsessives!</h3>
          <p className='list_text'>Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven 
            haircare, By BEAUTY BAY has everything you need to discover your next best obsession.</p>
            <Link to='foundation' className='shop_btn'>Shop now</Link>
        </div>
    </div>
    <div>
    </div>
      <Footer />
    </>
  )
}

export default Hero