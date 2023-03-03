import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={require("../../assets/banner.png")} width="100%" alt="img" />
                </div>
                <div>
                    <img src={require("../../assets/banner.png")} width="100%" alt="img" />
                </div>
                <div>
                    <img src={require("../../assets/banner.png")} width="100%" alt="img" />
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;