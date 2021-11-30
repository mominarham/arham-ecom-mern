import { useState,useRef } from 'react';
import {Button,Overlay,Popover} from 'react-bootstrap';
import { CartState } from '../context/Context';
import {Link} from 'react-router-dom';

function PopoverCom() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const {state:{cart}, dispatch} = CartState()
  
    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };
    return (
        <div ref={ref}>
          <Button onClick={handleClick}>cart ({cart.length})  </Button>
    
          <Overlay
            show={show}
            target={target}
            placement="bottom"
            container={ref}
            containerPadding={20}
          >
            <Popover id="popover-contained">
              <Popover.Header as="h3">Items</Popover.Header>
              <Popover.Body>
                {/* <strong>Holy guacamole!</strong> Check this info. */}
                { cart.length === 0 ? <div style={{width:'300px'}} > <p> no product </p> </div> : cart.map(c=>
                        (<>
                          <div style={{display:'flex',alignItems:'center'}} >
                            <div style={{width:'170px',paddingTop:'10px'}} >  <p style={{fontSize:'12px',fontWeight:'bold',padding:'0',margin:'0'}} >{c.title}   </p></div>
                            <div style={{marginLeft:'10px'}}  ><Button variant='danger'  size='sm' onClick={()=>dispatch({type:'REMOVE_FROM_CART',payload:c})} > remove</Button></div>
                          </div>
                            <hr style={{color:'black', backgroundColor: 'black',height: 1}}/>
                            </>
                          )
                          )
                        }
              </Popover.Body>
                       { cart.length ? <div style={{background:'#002E83',height:'30px'}} > <Link to='/checkout'><p style={{textDecoration:'none',color:'white',display:'flex',justifyContent:'center',paddingTop:'5px',fontWeight:'bold'}} > Checkout </p> </Link></div> : null}
                    
            </Popover>
          </Overlay>
        </div>
      );
}

export default PopoverCom;





