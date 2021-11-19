import { Typography } from '@mui/material';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className="mt-3">
            <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "15px" }}>
                About Us
            </Typography>
            <Row xs={1} md={1} lg={2} className="d-flex md:pt-5 pb-5 mx-0">
                <Col className="col-lg-6 p-5 mt-5">
                    <h1 className="text-secondary fw-bold">Car Gellery</h1>
                    <h5 className="d-flex align-items-center ">Car Store Nyc safe and secure! Discover us now! Easy Acces To Information. Simple in use. Multiple sources combined. All the Answers. Fast and trusted.</h5>
                </Col>
                <Col className="col-lg-6 photo sm:mt-5">
                    <img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                </Col>
            </Row>

        </div>
    );
};

export default AboutUs;