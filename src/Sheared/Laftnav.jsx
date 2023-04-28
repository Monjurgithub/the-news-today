import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../assets/1.png';
import second from '../assets/2.png';
import third from "../assets/3.png";
import Catagory from '../pages/home/Catagory/Catagory';

const Laftnav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(()=>{
        fetch("https://the-news-today-server-monjurgithub.vercel.app/catagories")
        .then(res =>res.json())
        .then(data =>setCatagories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
           <h3>All Cetagory</h3>
            <div>
            {
                catagories.map(category=>
                <p key={category.id}><Link to={`/category/${category.id}`}  className='text-black text-decoration-none'>{category.name}</Link></p>
                
            )
            }
            
            <div>
            <Row xs={1} md={2} lg={1} className="g-4 mt-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
        </Row>
            </div>
            </div>
        </div>
    );
};

export default Laftnav;