import  { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import './selected.css'

const Korzina = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cart);
  
  const removeFromCart = (id) => {
    dispatch({type: "REMOVE_FROM_CART", id})
  }

  const increaseQuantity = (id) => {
    dispatch({type: "INCREASE_QUANTITY", id})
  }

  const decreaseQuantity = (id) => {
    dispatch({type: "DECREASE_QUANTITY", id})
  }


  console.log(cartData)

  return (
    <div>
        <div className='all_cards_wrapper'>
       { 
        cartData.map(product => 
          <div className='selected_product' key={product.id}>
             <div>
             <img className='card_images' src={product.api_featured_image} alt="#" />
             </div>
            <div>
              <h2 className='card_title'>{product.name}</h2>
              <strong className='card_price'>${product.price}</strong>   
              <br />
            <button onClick={() => removeFromCart(product.id)} className='added_card_btn'>Remove from bag</button>
            </div>
            <div style={{marginTop: '20px'}}>
             <strong className='total_price'>Total for this: ${product.count * product.price}</strong>
             <button className='minus' onClick={() => decreaseQuantity(product.id)}>-</button>
              <strong> {product.count}</strong>
              <button className='plus' onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
          </div>  
        )
      }
      </div>
    </div>
  )
}

export default Korzina