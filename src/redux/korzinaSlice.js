const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
}

const korzinaSlice = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
            localStorage.setItem("cart",  JSON.stringify([...state.cart, action.product]))
            return {
                cart: [...state.cart, action.product]
            }
        case "REMOVE_FROM_CART":
            localStorage.setItem("cart",  JSON.stringify(state.cart.filter(product => product.id !== action.id)))
            return {
                cart: state.cart.filter(product => product.id !== action.id)
            }
        case "INCREASE_QUANTITY":
            const updatedCart = state.cart.map(product => {
                if(product.id === action.id){
                    product.count = product.count + 1
                }
                return product
            })
            localStorage.setItem("cart", JSON.stringify(updatedCart))
            return {
                cart: updatedCart
            }
        case "DECREASE_QUANTITY":
            let updatedCartRemove;
            if(state.cart.find(product => product.id == action.id).count != 1){
                updatedCartRemove = state.cart.map(product => {
                    if(product.id === action.id && product.count > 0){
                        product.count = product.count - 1
                    }
                    return product
                })
            }
            else{
                updatedCartRemove = state.cart.filter(product => product.id !== action.id)
            }
            localStorage.setItem("cart", JSON.stringify(updatedCartRemove))
            return {
                cart: updatedCartRemove
            }
        default:
            return state
    }
}

export {korzinaSlice}