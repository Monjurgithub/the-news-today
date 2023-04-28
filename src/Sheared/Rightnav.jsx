import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import zone1 from "./../assets/qZone1.png"
import zone2 from "./../assets/qZone2.png"
import zone3 from "./../assets/qZone3.png"
import bg from "./../assets/bg1.png"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';

const Rightnav = () => {
    const [user, setUser]= useState({})
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                
            }).catch((error) => {
                const errorMessage = error.message;
                
            });
    }
    return (
        <div>
            <div className='mb-4'>
                <p>Login With</p>
                <Button onClick={handleWithGoogle} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant="outline-success"><FaGithub></FaGithub> Login With Github</Button>
            </div>
            <div>
                <p>Find Us On</p>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaInstagramSquare></FaInstagramSquare> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='my-4'>
                <p>QZone</p>
                <div className='sm:mx-auto'>
                    <img className='img-fluid' src={zone1} alt="" />
                    <img className='img-fluid' src={zone2} alt="" />
                    <img className='img-fluid' src={zone3} alt="" />
                </div>
            </div>
            <div>
                {/* <img src={bg} alt="" /> */}
                <div className="text-white text-center" style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '80vh'
                }}>
                    <h3>Create an Amazing Newspaper</h3>
                    <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn-danger'>Learn More</button>
                </div>

            </div>
        </div>
    );
};

export default Rightnav;