import React from "react";
import Slider from "react-slick";


 const  SimpleSlider=()=>{
  
    const settings = {
      dots: true,
        //   infinite: true,
        //   speed: 500,
        //   slidesToShow: -1,
        //   slidesToScroll: 0
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>
                <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW/Unrec/Heros/under_1999_Tallhero_3000x1200._CB634376407_.jpg"/>
            </h3>
          </div>
          
        </Slider>
      </div>
    );
  }

  export default SimpleSlider