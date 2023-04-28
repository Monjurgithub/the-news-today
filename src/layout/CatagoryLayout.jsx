import React from 'react';
import Headar from '../Sheared/Headar';
import Footer from '../Sheared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Rightnav from '../Sheared/Rightnav';
import { Outlet } from 'react-router-dom';
const CatagoryLayout = () => {
    return (
        <div>
            <Headar></Headar>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><Rightnav></Rightnav></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CatagoryLayout;