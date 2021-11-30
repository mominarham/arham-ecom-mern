import StripeCheckout from 'react-stripe-checkout';
import { CartState } from '../context/Context';
import {useNavigate} from 'react-router-dom'


function StripeComponent({total}) {
  const navigate= useNavigate()
  const {state:{cart},dispatch} = CartState()

  // const [ amount, setAmount] = useState(1)
  // const [product, setProduct] = useState({
  //   name:'shirt',
  //   price : 10,
  //   productBy :'arham'

  // })

  // const ftechData= ()=>{
  //   fecth('http://localhost:5500/hua)
  //   .then((res)=>console.log('ressss==>',res))
  // }

  // console.log( 'ye cart hai ==>',cart )

  const makePayment = token =>{
    const body = {
      token,
      // product,
      cart,
      total
    }

    const headers= {
      'Content-Type' :'application/json'
    }

    return fetch('http://localhost:5000/payment',{
      method:'POST',
      headers,
      body :JSON.stringify(body)
    }).then((response)=>{
      // console.log('response mila ===>',response)
      // console.log('response status ==>',response.status)
      dispatch({
        type:'PAYMENT_DONE'
      })
      navigate('/')
    }).catch(err => console.log( "errr  ===>",err))
  }

  // const makePayment =(token)=>{
  //   console.log('ye token mil raha h ==>', token)
  // }
  return (
      <div>
   
      {/* <button onClick={ftechData} >  fecth </button>  */}
      <StripeCheckout 
        stripeKey='pk_test_51JwkwTSInJQZSc8LbK4SqtxYm8mtthcHxyREhETd1FsGX1l4YLVg58cHOfpq2DZbSk3y1DOLXfy3qkhkgty4Eu9V00FDf1OMSf'
        token ={makePayment}
        name ='Pay Using Card'
        amount= {total * 100}
        currency="INR"
        shippingAddress
        /> 
    
    </div>
  );
}

export default StripeComponent;