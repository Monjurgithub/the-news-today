import React from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from "../assets/logo/logonews1.jpg"
import moment from 'moment';
import Marquee from 'react-fast-marquee';

const Headar = () => {
    return (
        <div>
            <Container>
                <div className='text-center mt-5 mb-3'>
                    <div className='h-5 d-inline-block'>
                        <img className='img-fluid' src={logo} alt="" />
                    </div>
                    <p><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format('LLLL')}</p>
                </div>
                <div className='d-flex m-4'>
                    <Button variant="danger">Latest</Button>
                    <Marquee speed={25}>
                        European countries demand answers from Beijing after top diplomat questions sovereignty of former Soviet republics, in comments that could undermine China’s efforts to be seen as a potential mediator between Russia and Ukraine
                    </Marquee>
                </div>
            </Container>
        </div>
    );
};

export default Headar;