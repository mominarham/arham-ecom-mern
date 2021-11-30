import React, { useState, useEffect } from 'react'
import { CartState } from '../context/Context';
import StripeComponent from './StripeComponent';
import { Card, Button } from 'react-bootstrap';


function Checkout() {
    const [total, setTotal] = useState()
    const { state: { cart }, dispatch } = CartState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + (curr.price) * curr.qty, 0))
    }, [cart])
    // console.log('price ==>', cart)
    return (
        <div>
            <div style={{display:'flex' }}>



                {cart.length ? ( <> <div style={{width:'900px', borderRight:'1px solid #C8C9CA',height:'500px' }}  > {cart.map(p => (<div style={{ }} >
                    <div  style={{ width:'870px'}}>
                    
                        <img src={p.image} style={{ width: '100px', height: '120px' }} alt='product' />
                        <Card.Body>
                            <Card.Text style={{ height: '40px' }} >
                                <p style={{ fontWeight: 'bold', fontSize: '14px' }} >{p.title}</p>
                                <p style={{ fontWeight: 'bold', fontSize: '14px' }} >Price  {p.price}</p>
                            </Card.Text>
                            <div style={{ marginTop: '40px' }}>

                                <Button variant='primary' disabled={p.qty === 1 ? true : false} onClick={() => dispatch({ type: 'DECREASE_ITEM', payload: p.id })}>- </Button> {p.qty} <Button variant='primary' onClick={() => dispatch({ type: 'INCREASE_ITEM', payload: p.id })} > + </Button>
                                <Button style={{ marginLeft: '20px' }} onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: p })} variant='danger'> Remove Item </Button>
                            </div>
                        </Card.Body>
                        <hr />
               
                    </div>


                </div>))}
                </div>
                    <div style={{ marginLeft:'40px' }} >
                        <div>

                            <h5> Total :  {(Math.round(total * 100) / 100).toFixed(2)} Rs. </h5>
                        </div>
                        <div style={{marginLeft:'0px'}} >
                            <StripeComponent total={total} />
                        </div>
                    </div>
                    </>
                ) 
                
                
                
                : 
                
                
                (
                    <p>no product</p>
                )
                }
            </div>

        </div>
    )
}

export default Checkout