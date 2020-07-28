import React from 'react';
import Filter from './Filter';
import { Link } from "react-router-dom";
import './product.css';

const ProductListWithDetail = () => {
    var data = require("../mock_data/productList.json")
    var imgSrc = "https://rukminim1.flixcart.com/image/312/312/k6mibgw0/mobile/y/h/f/samsung-galaxy-s20-sm-g980fzadinu-original-imafpfkbhhtf6b8v.jpeg";
    return(
        <>
            <div style={{display: 'flex'}}>
                <div className="divid">
                    <Filter />
                </div>   
                <div style={{width: '100%'}}>
                    {
                        data.map((obj)=>(
                            <div className="row pdcardpd detail_card_shadow">
                            <Link to='/product_detail'>
                                <div className="col-md-2">
                                    <div className="prodiv_pd">
                                        <div className="img_div_pd">
                                            <img className="_1Nyybr" src={obj.phoneImg[0].imgSrc} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div>
                                        <h5 className="prod_title">{obj.title}</h5>
                                        <div style={{display: 'flex'}}>
                                            <div className="hGSR34">
                                                { obj.rating.average }
                                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="_2lQ_WZ"></img>
                                            </div>
                                            <div className="price"><h5 className="rating_count">{ obj.rating.noOfRating } Ratings</h5></div>
                                        </div>
                                        <ul className="ul">
                                            {
                                                obj.specifications.map((spf)=>(
                                                <li>{spf.value}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div>
                                        <div><h2>{ obj.price.price }</h2></div>
                                        <div style={{display: 'flex'}}>
                                            <div className="disprice"><h5>{ obj.price.disPrice }</h5></div>
                                            <div className="disinper"><h5>{ obj.price.disPercentage }</h5></div>
                                        </div>
                                    </div>
                                </div>
                            </Link> 
                            </div>                           
                        ))
                    }
                </div>
            </div>                     
        </>
    )
}

export default ProductListWithDetail;