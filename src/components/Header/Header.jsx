import React, { useContext } from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {
     // const { user, logOut } = useContext(AuthContext)

     // // logOut part start
     // const handelLogOut = () => {
     //      logOut()
     //           .then(() => {
     //                // Sign-out successful.
     //           })
     //           .catch((error) => {
     //                // An error happened.
     //           });
     // }
     // // logOut part end

     return (
          <div className='fixed-top '>
               <Navbar bg="dark" expand="lg" className=' mb-2'>
                    <Container fluid className='container'>
                         <Navbar.Brand href="#" className='fs-4'>
                              <h2 className=' text-light'>Food Recipe</h2>
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
                                   {/* {
                                        user ? <div>
                                             <span className=' me-3'>{user.displayName}</span>
                                             <Button onClick={handelLogOut} variant="info" className='py-2'>Log Out</Button>
                                        </div> : <ActiveLink to="/login">Login</ActiveLink>
                                   } */}
                                   <ActiveLink to="/login">Login</ActiveLink>
                              </Form>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;