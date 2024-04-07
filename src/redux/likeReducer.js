const initialState = {
  likes: JSON.parse(localStorage.getItem("likedproducts")) || []
}

const likeReducer = (state = initialState, action) => {
  switch(action.type){
      case "LIKE_PRODUCT":
          localStorage.setItem("likedproducts", JSON.stringify([ ...state.likes, action.product]))
         return{
           likes: [ ...state.likes, action.product]
         }
      case "DISLIKE_PRODUCT":
          localStorage.setItem("likedproducts", JSON.stringify(state.likes.filter(product => product.id !== action.id)))
          return{
              likes: state.likes.filter(product => product.id !== action.id)
          } 
      default:
          return state 
  }
}
export { likeReducer };