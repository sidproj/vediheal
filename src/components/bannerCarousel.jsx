import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import banner from "../assets/images/banner.png";

class BannerCarousel extends Component{
    render(){
        return(
            <Carousel showThumbs={false}>
                <div>
                    <img src={banner}/>
                </div>
                <div>
                    <img src={banner}/>
                </div>
                <div>
                    <img src={banner}/>
                </div>
            </Carousel>
        );
    }
}

export default BannerCarousel;