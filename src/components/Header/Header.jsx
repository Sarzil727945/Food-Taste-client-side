import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../ActiveLink/ActiveLink';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Button } from 'react-bootstrap';


const Header = () => {
     const { user, logOut } = useContext(AuthContext)

     // logOut part start
     const handelLogOut = () => {
          logOut()
               .then(() => {
                    // Sign-out successful.
               })
               .catch((error) => {
                    // An error happened.
               });
     }
     // logOut part end

     return (
          <div className='fixed-top '>
               <Navbar bg="light" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4'>
                              <img className='logoStyle me-5' src="https://recipepress.inspirythemes.com/fourth/wp-content/uploads/sites/5/2017/01/logo.png" alt="" />
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                              <Nav
                                   className="mx-auto my-2 my-lg-0"
                                   style={{ maxHeight: '100px' }}
                                   navbarScroll
                              >
                                   <ActiveLink to="/">Home</ActiveLink>
                                   <ActiveLink to="/blog">Blog</ActiveLink>
                              </Nav>
                              <Form className="d-flex">
                                   {
                                        user ? <div>
                                             <img title={user.displayName} className='imgStyle me-3' src={user.photoURL} alt="" />
                                             <Button onClick={handelLogOut} variant="info" className='py-2'>Log Out</Button>
                                        </div> : <ActiveLink to="/login">Login</ActiveLink>
                                   }
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;