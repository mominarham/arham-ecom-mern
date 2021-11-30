import React,{useEffect,createContext,useReducer,useContext} from 'react'
import { cartReducer, productReducer,SingleReducer } from './Reducer'


const Cart = createContext()
function Context({children}) {

    const [state,dispatch] = useReducer(cartReducer,{
        product: [],  
        loading: true,
        cart:[]
    })

    const [SingleState,SingleDispatch] = useReducer(SingleReducer,{
        item: [],  
        loading: true,
    })

    const [productState,productDispatch] = useReducer(productReducer,{
        searchQuery: ''
    })

    // console.log('ye state aar aha h h h h ',state)

    
    const fecthProduct = ()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                // console.log('ye waha se aa rha h ==>',data)
                dispatch({type:'FETCH_PRODCUT',payload:data})
            })
    }

    useEffect(()=>{
        fecthProduct()
    },[])

    return <Cart.Provider value={{state,dispatch,productState,productDispatch,SingleState,SingleDispatch}} >
        {children}
    </Cart.Provider>
}

export default Context
export const CartState = ()=>{
    return useContext(Cart)
}
