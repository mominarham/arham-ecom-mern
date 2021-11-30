import React from 'react';
import { Navbar,Container,Nav,Form,FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import PopoverCom from './Popover';
function NavbarComponent() {
  const {productDispatch} = CartState()
  // const [show, setShow] = useState(false);
  // const [target, setTarget] = useState(null);
  // const ref = useRef(null);

  // const handleClick = (event) => {
  //   setShow(!show);
  //   setTarget(event.target);
  // };
  // const [checker,setChecker] = useState([])
  // console.log('checkerrr',checker)
  // const [count,setCount] = useState(0)
  // const cartItems = ()=>{
  //   const getCart = JSON.parse(localStorage.getItem('catItems'))
  //   console.log( 'this isn',getCart)
  //   if(getCart){
  //     setCount(getCart.length)
  //     console.log('ye count hao ',getCart.length)
  //     setChecker(getCart)
  //     console.log('yah tak aa raha h ')
  //     console.log('type =',typeof(checker))
      
  //   }
  // }
  // useEffect(()=>{
  //   cartItems()
  // },[])
  // console.log('ye search se aa raha h ==>',)
    return (
        
          <>
          {/* <Navbar bg='dark' variant='dark' fixed="top"  >
            <Container>
              <Navbar.Brand>
                shope name 
              </Navbar.Brand>
              <Navbar.Text className='seacrh'>
                <FormControl
                  style={{width:500}}
                  placeholder='search a product'
                  onChange={(e)=>{
                    productDispatch({
                      type:'FILTER_BY-SEARCH',
                      payload:e.target.value
                    })
                  }}
                />
              </Navbar.Text>

              <Nav>
                <Dropdown style={{paddingRight:'0px'}} >
                  <Dropdown.Toggle variant='success' >
                    {cart.length} 
                  </Dropdown.Toggle>

                 

                  <Dropdown.Menu style={{marginRight:'00px'}}  >
                    <div style={{width:'500px',marginRight:'400px'}} >

                    {
                      cart.map(c=>
                        (
                          
                          <p>{c.title}  <button onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:c})} > remove</button> </p>
                          )
                          )
                        }

                        </div>
                    <Link to='/checkout' > Checkout </Link>
                  </Dropdown.Menu>
                        
                </Dropdown>
              </Nav>
            </Container>
          </Navbar> */}
<Container fluid>
<Navbar bg="dark" variant='dark' expand="lg" fixed='top' >
  <Container fluid>
    <Navbar.Brand > <Link style={{textDecoration: 'none'}} to='/' ><p style={{ color:'white',padding:'0',margin:'0'}} > Home</p> </Link>  </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      
      </Nav>
      <Form className="d-flex">
        <FormControl
          
  
          className='me-5'
          
          placeholder='search a product'
                  onChange={(e)=>{
                    productDispatch({
                      type:'FILTER_BY-SEARCH',
                      payload:e.target.value
                    })
                  }}
        />
      </Form>
        {/* <Button variant="outline-success">Search</Button> */}
        {/* <div style={{marginLeft:'30px'}} > */}

        <PopoverCom/>
        {/* </div> */}
    </Navbar.Collapse>
  </Container>
</Navbar>
</Container>


      </>
       
    )
}

export default NavbarComponent;
