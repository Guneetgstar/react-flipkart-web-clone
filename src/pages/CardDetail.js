import React, {useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { cardAction } from '../redux';
import './card_detail.css';

export const CardDetail = () => {
    // var cardData = JSON.parse(localStorage.getItem('card'));
    // console.log(typeof cardData,"cardData=====>",cardData);
    // const [cardData, updatedCardData]=useState(JSON.parse(localStorage.getItem('card')));
    // var img = "https://rukminim1.flixcart.com/image/312/312/k6mibgw0/mobile/y/h/f/samsung-galaxy-s20-sm-g980fzadinu-original-imafpfkbhhtf6b8v.jpeg";
    const cardData = useSelector(state=>state.cardData);
    const num = useSelector(state=>state.num);
    // var price = CalculatePrice(cardData);
    const nf = new Intl.NumberFormat();
    const [totalPrice, updatePrice] = useState(nf.format(CalculatePrice(cardData)));
    // nf = new Intl.NumberFormat();
    // var price = CalculatePrice(cardData);
    // console.log("price--------->", price);
    // updatePrice(price)
    // console.log("num--------->", num);
    // const [cardData, updatedCardData]=useState(JSON.parse(localStorage.getItem('card')));
    const dispatch = useDispatch();
    return(
        <>
            { (num>0)?<div className="row font_f">
                <div className="col-md-9">
                    <div className="main_div">
                        <div>
                            <div style={{padding: '10px 20px', borderBottom: '1px solid #ccc', fontSize: '23px',fontWeight: '500'}}>
                                    My Card ({num})
                            </div>
                        </div>
                        {
                            cardData.map((obj, index)=>(
                                <div className="main_card">
                                    <div style={{padding: '10px', display: 'flex'}} className="row">
                                        <div style={{height: '112px', width: '112px', position: 'relative'}} className="col-md-3">
                                            <img className="_1Nyybr" src={obj.phoneImg[0].imgSrc} />
                                        </div>
                                        <div className="_3vIvU_ col-md-8">
                                            <h4>{obj.title}</h4>
                                            <p>Seller: TrueComRetail</p>
                                            <h4>{obj.price.price}</h4>
                                        </div>
                                        <div className="col-md-4">
                                            <p>Delivery by Wed Jul 22 | Free</p>
                                        </div>
                                    </div>
                                    <div style={{padding: '10px 0', display: 'flex'}} className="row">
                                        <div style={{position: 'relative'}} className="col-md-2">
                                            <div style={{display: 'flex'}}>
                                                <button style={{border: '1px solid #ccc', width: '30px', height: '30px', borderRadius: '50%', cursor: (obj.quantity<=1)?'no-drop':''}}
                                                    disabled={obj.quantity<=1}
                                                    onClick={
                                                        (e)=>{
                                                            // console.log("e-------->",obj.id);
                                                            if(obj.quantity>=1){
                                                                cardData.find(x => x.id == obj.id)['quantity'] = (obj.quantity - 1);
                                                                updatePrice(CalculatePrice(cardData));
                                                                localStorage.setItem('card',JSON.stringify(cardData));
                                                                dispatch(cardAction(JSON.parse(localStorage.getItem('card'))));
                                                            }
                                                        }
                                                    }>-</button>
                                                <input style={{border: '1px solid #ccc', width: '50px', height: '30px', margin: '0 5px', textAlign: 'center'}} disabled value={obj.quantity}/>
                                                <button style={{border: '1px solid #ccc', width: '30px', height: '30px', borderRadius: '50%'}}
                                                    onClick={
                                                        (e)=>{
                                                            // console.log("e-------->",obj.id);
                                                            cardData.find(x => x.id == obj.id)['quantity'] = (obj.quantity + 1);
                                                            // console.log("e-------->",cardData);
                                                            updatePrice(CalculatePrice(cardData));
                                                            localStorage.setItem('card',JSON.stringify(cardData));
                                                            dispatch(cardAction(JSON.parse(localStorage.getItem('card'))));
                                                            }
                                                        }>+</button>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <button onClick={()=>{
                                                cardData.splice(index,1);
                                                updatePrice(CalculatePrice(cardData));
                                                localStorage.setItem('card',JSON.stringify(cardData));
                                                dispatch(cardAction(JSON.parse(localStorage.getItem('card'))));
                                            }}>
                                                REMOVE
                                            </button>
                                        </div>
                                    </div>
                                </div>   
                            ))
                        }
                        <div className="main_card _1RLi8m _2GJ0F">
                            <button className="_2AkmmA" style={{cursor: (num == 0)?'not-allowed': ''}} disabled={num == 0}>PLACE ORDER</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3" style={{padding: '0px 10px 0 0px', position: 'sticky', top: '95px'}}>
                    <div className="main_div bil_div">
                        <div style={{padding: '10px 20px', borderBottom: '1px solid #ccc'}}>
                            <p style={{color: '#87878', fontSize: '17px'}}>
                                PRICE DETAILS
                            </p>
                        </div>
                        <div>
                            <div style={{display: 'flex', padding: '10px 10px'}}>
                                <div style={{flex:'1', fontSize: '15px'}}>Price ({num} items)</div>
                                <div style={{flex:'0', fontSize: '15px'}}>₹{totalPrice}</div>
                            </div>
                            <div style={{display: 'flex', padding: '10px 10px'}}>
                                <div style={{flex:'1', fontSize: '15px'}}>Delivery Fee</div>
                                <div style={{flex:'0', fontSize: '15px'}}>FREE</div>
                            </div>
                            <div style={{display: 'flex', padding: '20px 10px'}} className="top_bor">
                                <div style={{flex:'1'}}>Total Amount</div>
                                <div style={{flex:'0'}}>₹{totalPrice}</div>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>:
            <div className="_12iFZG _3PG6Wd">
                <div style={{textAlign: 'left', padding: '20px'}}>
                    <h4>My Cart</h4>
                </div>
                <div className="_20my3">
                    <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" style={{height: '162px'}} />
                    <h5 style={{textAlign: 'center', padding: '10px'}}>Cart is Empty</h5>    
                </div>
            </div>}
        </>
    ) 
}

const CalculatePrice = (data) =>{
    console.log("data=======>", data);
    var totalPrice = 0;
    data.map((obj)=>{
        // console.log("obj=======>", obj.quantity*Number(obj.price.price.replace(/\D/g, '')));
        totalPrice = obj.quantity*Number(obj.price.price.replace(/\D/g, '')) + totalPrice;
        // console.log("obj=======>", obj);
    })
    console.log("totalPrice=======>", totalPrice);
    return totalPrice;
}

export default connect()(CardDetail);