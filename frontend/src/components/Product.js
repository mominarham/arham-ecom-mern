import React from 'react'
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { CartState } from '../context/Context';

function Product({ product }) {

    const {state:{cart},dispatch} = CartState()
    return (


        <div style={{marginTop:'20px' }}  >
                
                {/* style={{margin:'20px',border:'1px solid black' ,height:'400px' }} */}
                        {/* <Card style={{ width: '20rem',height:'400px' }}>
                            <Card.Img variant="top" src={product.image} height='340px'  />
                            <Card.Body width='200px' >
                                <Card.Title> {product.name} </Card.Title>
                                <Card.Text>
                                    {product.title}
                                </Card.Text>
                            </Card.Body>
                           
                            <Card.Body>
                                <Button  variant='primary'> Card Link   </Button>

                                {
                                    cart.some(p=>p.id === product.id) ? (
                                        <Button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:product})}  variant='primary'> Remove Item </Button>
                                    ):(
                                        <Button onClick={()=>dispatch({type:'ADD_TO_CART',payload:product})}  variant='primary'> Add to cart </Button>
                                    )
                                }
                                
                            </Card.Body>
                        </Card> */}




                        <Card style={{ width: '20rem' ,height:'480px' }}>
  <Card.Img variant="top" src={product.image} height='300px' alt='product' />
  <Card.Body>
    <Card.Text style={{height:'40px'}} >
          <p style={{fontWeight:'bold',fontSize:'14px'}} >{product.title}</p>
    </Card.Text>
          <p style={{fontWeight:'bold',fontSize:'14px',margin:'0',padding:'0'}}> Price: {product.price} Rs.</p>
    <div  style={{marginTop:'20px'}}>

    <Button  variant='primary' style={{marginRight:'40px'}} > <Link style={{textDecoration:'none',color:'white'}} to={`detail/?prodId=${product.id}`} > View Item</Link> </Button>

    {
        cart.some(p=>p.id === product.id) ? (
            <Button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:product})}  variant='danger'> Remove Item </Button>
            ):(
                <Button onClick={()=>dispatch({type:'ADD_TO_CART',payload:product})}  variant='primary'> Add to cart </Button>
                )
            }
    </div>
  </Card.Body>
</Card>
             
                
        </div>

    )
}

export default Product
