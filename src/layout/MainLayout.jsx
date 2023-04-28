import React from 'react';
import Headar from '../Sheared/Headar';
import Footer from '../Sheared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Laftnav from '../Sheared/Laftnav';
import Rightnav from '../Sheared/Rightnav';
import { Outlet } from 'react-router-dom';
import NavberForHomePage from '../Sheared/NavberForHomePage';

const MainLayout = () => {
    return (
        <div>
            <Headar></Headar>
            <NavberForHomePage></NavberForHomePage>
            <Container>
                <Row>
                    <Col lg={3}><Laftnav></Laftnav> </Col>
                    <Col lg={6}><Outlet></Outlet></Col>
                    <Col lg={3}><Rightnav></Rightnav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;