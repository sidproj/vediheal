import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import banner from "../assets/images/banner.png";
import banner1 from "../assets/images/banner1-min.png";
import banner2 from "../assets/images/banner2-min.png";
import banner3 from "../assets/images/banner3-min.png";
import { styled } from "styled-components";

const Img = styled.img`
    width:100vw;
`

class BannerCarousel extends Component{
    render(){
        return(
            <Carousel showThumbs={false}>
                {/* <div>
                    <img src={banner}/>
                </div> */}
                <div>
                    <Img src={banner1}/>
                </div>
                <div>
                    <Img src={banner2}/>
                </div>
                <div>
                    <Img src={banner3}/>
                </div>
            </Carousel>
        );
    }
}

export default BannerCarousel;