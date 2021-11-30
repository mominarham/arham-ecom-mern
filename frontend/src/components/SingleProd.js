import React,{useEffect} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import { CartState } from '../context/Context';
import {  Button } from 'react-bootstrap';

function SingleProd() {
    const navigate = useNavigate()
    const {state: {product,cart},dispatch ,SingleState,SingleDispatch} = CartState()
    // console.log('SingleState==>',SingleState.item[0])

    const search = useLocation().search
    const prodId = new URLSearchParams(search).get('prodId')
    


    const getProd = ()=>{
        // const [loading,setLoading] = useState(true)
        // console.log(' ye state =>>>>>>', state)
        // console.log(' ist coming inside  fuct===>', Number(prodId))
        //  setItem(product.filter(p=> p.id === Number(prodId)))

        //  setLoading(false)
        const item =product.filter(p=> p.id === Number(prodId))
         SingleDispatch({
             type:'SET_ITEM',
             payload:item
         })
    }

    
    useEffect( ()=>{
        getProd()
    },[] )
    // console.log('ye id ha ==>',prodId)
    return (
        <div>

        { SingleState.loading ?  (<> loading........ </> ):(
         <div style={{display:'flex'}} > 
             
                <div>
                    <img style={{width:'400px',height:'600px'}} src={SingleState.item[0].image} alt='product'/>
                </div>

                <div style={{marginLeft:'40px',marginTop:'90px'}} >

                    <div>
                        <h6> {SingleState.item[0].title}  </h6>
                    </div>

                    <div>
                        <h6> {SingleState.item[0].price} Rs.  </h6>
                    </div>

                    <div style={{marginTop:'30px'}} >
                    {
        cart.some(p=>p.id === SingleState.item[0].id) ? (
            <Button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:SingleState.item[0]})}  variant='danger'> Remove Item </Button>
            ):(
                <Button onClick={()=>dispatch({type:'ADD_TO_CART',payload:SingleState.item[0]})}  variant='primary'> Add to cart </Button>
                )
            }

                    <Button onClick={()=>navigate('/')} style={{marginLeft:'30px'}} variant='primary'> Back Home </Button>
                    </div>




                

                </div>
             
        </div> )

         
         
         }
        </div>
    )
}

export default SingleProd
