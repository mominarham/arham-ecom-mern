
// import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Routes} from'react-router-dom';
// import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import NavbarComponent from './components/NavbarComponent';
import {Container} from 'react-bootstrap';
import SingleProd from './components/SingleProd';

function App() {
 
  return (
      // <div className="App">
      <BrowserRouter>
      <Container fluid>

      <NavbarComponent/>
        <div style={{marginTop:'80px'}} >
          <Routes>
            <Route exact  path='/' element={<Home/>} />
            {/* <Route path='/detail' element={<ProductDetail/>} /> */}
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/detail/' element={<SingleProd/>} />
          </Routes >
        </div>
      </Container>
        
      </BrowserRouter>
    // </div>
  );
}

export default App;
