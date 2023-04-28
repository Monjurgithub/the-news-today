import React from 'react';
import NavberForHomePage from '../Sheared/NavberForHomePage';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const LoginLayout = () => {
    return (
        <div>
            <Container>
                <NavberForHomePage></NavberForHomePage>
                <Outlet></Outlet>
            </Container>
        </div>
    );
};

export default LoginLayout;