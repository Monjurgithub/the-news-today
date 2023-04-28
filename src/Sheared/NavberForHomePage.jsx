import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const NavberForHomePage = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout =() =>{
        logOut()
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return (

        <div>
            <Container>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">

                            <Link className='me-2 text-black text-decoration-none' to="/">Home</Link>
                            <Link className='me-2 text-black text-decoration-none' to="">About</Link>
                            <Link className='me-2 text-black text-decoration-none' to="/career">Career</Link>
                        </Nav>
                        <Nav className='d-flex'>
                            

                            {
                                user ? <span className='m-2'>{user.email}<Link to = "/login"><Button  className='m-2' onClick={handleLogout} variant="dark">LogOut</Button></Link></span>:
                                <Link to = "/login"><Button  variant="dark">LogIn</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
            </Container>
        </div>
    );
};

export default NavberForHomePage;