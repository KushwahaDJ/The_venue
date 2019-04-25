import React from 'react';
import Slider from "react-slick";

import sl1 from './../../../src/resources/images/slide_one.jpg';
import sl2 from './../../../src/resources/images/slide_two.jpg';
import sl3 from './../../../src/resources/images/slide_three.jpg';

const Carousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay:true,
        speed:500
    }
    return ( 
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`, 
                overflow:'hidden'
            }}
        >
        <Slider {...settings}>
            <div>
                <div className="carrousel_image"
                    style={{
                        background:`url(${sl1})`,
                        height:`${window.innerHeight}px`,
                    }}
                >
                </div>
            </div>
            <div>
                <div className="carrousel_image"
                    style={{
                        background:`url(${sl2})`,
                        height:`${window.innerHeight}px`,
                    }}
                >
                </div>
            </div>
            <div>
                <div className="carrousel_image"
                    style={{
                        background:`url(${sl3})`,
                        height:`${window.innerHeight}px`,
                    }}
                >
                </div>
            </div>

        </Slider>

        </div>
     );
}
 
export default Carousel;