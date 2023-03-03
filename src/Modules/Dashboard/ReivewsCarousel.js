import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Feedback from "../../Components/Feedback/Feedback";

class ReivewCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <Feedback />
                </div>
            </Carousel>
        );
    }
};

export default ReivewCarousel;