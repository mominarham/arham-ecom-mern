import React from 'react';
import Product from './Product';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
// import NavbarComponent from './NavbarComponent';
import { CartState } from '../context/Context';



function Home() {
    const { state, productState } = CartState()
    const transformProduct = () => {
        let sortedProducts = state.product
        if (productState.searchQuery) {
            sortedProducts = sortedProducts.filter((prod) => prod.title.toLowerCase().includes(productState.searchQuery))
        }
        return sortedProducts
    }


    return (
        <div>
            <Container>
                {state.loading ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner> </div> :
                    <>
                        <div> <Row>  {transformProduct().map((product) => (
                            <>
                                <Col xl={4} lg={4} md={6} sm={12} key={product.title} >
                                    <Product product={product} />
                                </Col>
                            </>
                        ))} </Row></div> </>}
            </Container>
        </div>


        // <div>
        //     helloooo
        // </div>
    )
}

export default Home
