import React from 'react';
import { Autoplay } from 'swiper';

const Cards = (prop) => {
    const resData = prop
    console.log("prop===============2>", prop)
    return(
        <>
        <div className="row" style={{padding: '10px 5px', height: 'auto'}}>
            <div className="ezCO6E">
                {prop['data'].map(data => (
                    <div className="NYE9b8 col col-md-4">
                        <a className="_1bn9xk">
                            <div className="_2tnqd0 _1_l8MX" style={{width: '100%'}}>
                            <img className="_232NW7 dImZt_" src={data['imgSrc']} />
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Cards;