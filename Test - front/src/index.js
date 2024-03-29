import React from 'react';
import { createRoot } from 'react-dom/client';
import {Link, Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Login from './components/authorization/Login';
import { logout } from './services/auth';
import { Button, Nav, Navbar, NavbarBrand ,Container} from 'react-bootstrap';
import Izvodjaci from './components/izvodjaci/Izvodjaci';
import Nastupi from './components/nastupi/Nastupi';



const App = () => {

    if(window.localStorage['jwt']){
        return( 
        
                <Router>

                <Navbar expand bg="dark" variant='dark'>   

                    <NavbarBrand as={Link} to="/"> JWD </NavbarBrand>  
                    <NavbarBrand as={Link} to="/izvodjaci"> Izvodjaci  </NavbarBrand>  
                    <NavbarBrand as={Link} to="/nastupi"> Nastupi  </NavbarBrand>  

                    <Nav>
                        <Button onClick={()=>logout()} >Logout</Button>
                    </Nav>
                </Navbar>
    
    		<Container style={{paddingTop:"10px"}}>
                <Routes>
                    <Route path='/' element={<Home/>} />   
                    <Route path='/izvodjaci' element={<Izvodjaci/>} />   
                    <Route path='/nastupi' element={<Nastupi/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='*'  element={<NotFound/>}/>
                </Routes>
                </Container>
                </Router>
    
    
        )
    }else{
        return( 
          
                <Router>

                <Navbar expand bg="dark" variant='dark'> 
                     <NavbarBrand as={Link} to="/"> JWD </NavbarBrand>    
                     <NavbarBrand as={Link} to="/nastupi"> Nastupi  </NavbarBrand>      
                     <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                </Navbar>
                
    		<Container style={{paddingTop:"10px"}}>
                <Routes>
                    <Route path='/' element={<Home/>} />      
                    <Route path='/nastupi' element={<Nastupi/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='*'  element={<NotFound/>}/>
                </Routes>
  		</Container>
                </Router>
    
    
        
    
        )
    }

    

};


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <App />,
);
 
