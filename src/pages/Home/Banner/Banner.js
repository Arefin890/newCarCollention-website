import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel variant="dark">
            <Carousel.Item className="banner_item w-full" >
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://images.unsplash.com/photo-1548618607-fe992dd33eff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                    alt="First slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">Make them fun! Alliteration</h2>
                    <h5 className="text-white">design without being too literal. Think about it: If all titles were literal</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://images.unsplash.com/photo-1550955295-77d6e18a24da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Second slide"
                />
                <Carousel.Caption className="banner_description">
                    <h2 className="text-5xl text-white">Best Cars</h2>
                    <h5 className=" text-white">Relate it to your design without being too literal</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="banner_item w-full">
                <img
                    className="d-block w-screen h-100"
                    style={{ width: '100%' }}
                    src="https://images.unsplash.com/photo-1552458526-7fe72702ae33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Third slide"
                />
                <Carousel.Caption className="banner_description align-middle">
                    <h2 className="text-5xl text-white">Car are luxery things </h2>
                    <h5 className=" text-white">Luxery car are Laxery life</h5>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;