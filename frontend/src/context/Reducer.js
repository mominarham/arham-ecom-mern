export const cartReducer = (state,action)=>{
    switch(action.type){
        case 'FETCH_PRODCUT':
            return {
                ...state,
                loading:false,
                product:action.payload
            }

        case 'ADD_TO_CART':
            return{...state,cart:[...state.cart,{...action.payload, qty:1}]}

        case 'REMOVE_FROM_CART':
            return{
                ...state,
                cart:state.cart.filter(c=>c.id !== action.payload.id)
            }

        case 'PAYMENT_DONE':
            return {
                ...state,
                cart:[]
            }
        
        case 'DECREASE_ITEM':
            // console.log('ye cart ha ==>',state.cart)
            let updateCart = state.cart.map(curElem=>{
                if(curElem.id === action.payload){
                    // console.log('ye current mil raha hai ',curElem)
                    // console.log('action==>',action.payload)
                    return {...curElem, qty: curElem.qty-1}
                }
                return curElem
            } )

            return {...state, cart:updateCart}


        case 'INCREASE_ITEM':
            // console.log('ye cart ha ==>',state.cart)
            let increaseCart = state.cart.map(curElem=>{
                if(curElem.id === action.payload){
                    // console.log('ye current mil raha hai ',curElem)
                    // console.log('action==>',action.payload)
                    return {...curElem, qty: curElem.qty+1}
                }
                return curElem
            } )

            return {...state, cart:increaseCart}
            

        default:
            return state
    }
}


export const SingleReducer =(state,action)=>{

    switch(action.type){
        case 'SET_ITEM':
            return {
                ...state,
                loading: false,
                item: action.payload,  
            }


        default:
            return state
    }
}  


export const productReducer = (state,action)=>{
    switch(action.type){
        case 'FILTER_BY-SEARCH':
            return {...state, searchQuery:action.payload}


        default:
            return state
    }
}