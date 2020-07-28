import React, {useState, useContext, createContext} from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { cardAction } from '../redux';
import MultiCarousel from '../MultiCarousel';
import './product_detail.css'

export const CardLength = createContext();

const ProductDetail = (props) => {
    var dashData = require('../mock_data/dashborad.json');
    var data = require("../mock_data/productDetail.json");
    // console.log("data.title--------->", data.phoneImg);
    const [imgSrc, imgSrcUpd] = useState(data.phoneImg[0].imgSrc);
    // const num = useSelector(state=>state.num);
    const dispatch = useDispatch();
    return(
        <>
        {/* <CardLength.Provider value={(JSON.parse(localStorage.getItem('card')) || []).length}> */}
            <div className="row" style={{padding: '10px'}}>
                <div className="col-md-5" style={{position: 'sticky', top: '90px'}}>
                    <div style={{display: 'flex'}}>
                        <div style={{width: '75px', border: '0.5px solid #ccc'}}>
                            { data.phoneImg.map((obj)=>(
                                <div className="pro_div">   
                                    <div onMouseEnter={(e) =>{ imgSrcUpd(e.target.style.backgroundImage.slice(5, -2)); } }  className="pro_imgs" style={{backgroundImage: "url(" + obj.imgSrc + ")"}}></div>
                                </div>
                            )) }
                        </div>
                        <div  style={{width: '400px', border: '0.5px solid #ccc'}}>
                            <div>
                                <img className="main_img" src={imgSrc} />
                            </div>
                        </div>
                    </div>
                    <div style={{width: '480px', display: 'flex', padding: '5px 0'}}>
                        <div style={{flex: '1'}}>
                            <button className="_2MWPVK" onClick={()=>{
                                let id = 0;
                                let card = JSON.parse(localStorage.getItem('card')) || [];
                                // console.log(typeof card,"card----------->",card);
                                data.id = (card.length>0)?(card.slice(-1)[0].id+1):0;
                                data.quantity = 1;
                                card.push(data);
                                localStorage.setItem('card',JSON.stringify(card));
                                dispatch(cardAction(JSON.parse(localStorage.getItem('card'))));
                            }}>ADD TO CART</button>
                        </div>
                        <div style={{flex: '1'}}>
                        <Link to="/card_detail">
                            <button className="_3MWPVK" onClick={()=>{
                                let id = 0;
                                let card = JSON.parse(localStorage.getItem('card')) || [];
                                // console.log(typeof card,"card----------->",card);
                                data.id = (card.length>0)?(card.slice(-1)[0].id+1):0;
                                data.quantity = 1;
                                card.push(data);
                                localStorage.setItem('card',JSON.stringify(card));
                                dispatch(cardAction(JSON.parse(localStorage.getItem('card'))));
                            }}>BUY NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div>
                        <h5 className="prod_title">{data.title}</h5>
                        <div style={{display: 'flex'}}>
                            <div className="hGSR34">
                                { data.rating.average }
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" className="_2lQ_WZ"></img>
                            </div>
                            <div className="price"><h5 className="rating_count">{ data.rating.noOfRating } Ratings</h5></div>
                        </div>
                        <div>
                            <h2>{ data.price.price }</h2>
                        </div>
                        <ul className="ul">
                            { data.specifications.map((obj)=>(
                                <li>{obj.value}</li>
                            )) }
                        </ul>
                        <div style={{display: 'flex'}}>
                            <div className="discrp"><p>Description</p></div>
                            <div style={{padding: '10px'}}>
                                <p>{ data.description }</p>
                            </div>
                        </div>
                        <div className="rating_div">
                            <div style={{padding: '35px 0'}}>
                                <h3>Ratings and Reviews</h3>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div style={{flex: '0.3', padding: '0 45px 0 0'}}>
                                    <div>
                                    <h4 style={{fontSize: '30px'}}>4.4★</h4>
                                    <p>3,830 Ratings and 518 Reviews</p>
                                    </div>
                                </div>
                                <div style={{flex: '1'}}>
                                    <table>
                                        <tr>
                                            <td> 5★</td>
                                            <td className="progress_td">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'99%'}}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>2,569</td>
                                        </tr>
                                        <tr>
                                            <td> 4★</td>
                                            <td className="progress_td">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'35%'}}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>810</td>
                                        </tr>
                                        <tr>
                                            <td> 3★</td>
                                            <td className="progress_td">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'29%'}}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>188</td>
                                        </tr>
                                        <tr>
                                            <td> 2★</td>
                                            <td className="progress_td">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'10%', backgroundColor: '#fdbb34'}}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>57</td>
                                        </tr>
                                        <tr>
                                            <td> 1★</td>
                                            <td className="progress_td">
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'20%', backgroundColor: '#ec3e3e'}}>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>206</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
            <MultiCarousel data={dashData['phones']}/>
            {/* </CardLength.Provider> */}
        </>
    )
}

// const mapStatetoProps = (state) =>{
//     return{
//         num: state.num
//     }
// }

// const mapDispatchtoProps = (dispatch) => {
//     return{
//         cardAction: function(){
//             dispatch(cardAction());
//         }
//     }
// }

export default connect()(ProductDetail);
// export {CardLength};