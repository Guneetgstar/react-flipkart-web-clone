'use strict';

import React from 'react';
import Slider from "react-slick";
import { Link } from "react-router-dom";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const MultiCarousel = (prop) => {
    // render() {
  console.log("prop============>", prop);
  const resData = prop['data'];
  console.log("resData============>", resData);
    var settings = {
      dots: false,
      infinite: false,
      speed: 200,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
        <div className="container_slick div_shadow">
          <div className="cdiv">  
            <div>
                <h2 className="mcname">{prop['data']['titile']}</h2>
                <div className="left_div">
                  <Link to='/mobile'><a className="right_btn mcbtn" >VIEW ALL</a></Link>
                </div>
            </div> 
          </div>
        <Slider {...settings}>
          {resData['data'].map(data=>(
            <div>
              <Link to ='/product_detail' className="indivclick">
                <div className="cinnerDiv">
                  <img className="indivimg" src={data['imgSrc']} />
                </div>
                <div style={{textAlign:"center", marginTop: "25px"}}>
                    <h5 style={{color:"black"}}>{data['titile']}</h5>
                    <h5 style={{color:"green"}}>{data['purches']}</h5>
                    <h5 style={{color:"#b1b1b1"}}>{data['detail']}</h5>
                </div>
              </Link>
            </div>  
          ))}
        </Slider>
      </div>
    )
}

export default MultiCarousel;