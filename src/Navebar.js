import React, {useState, useEffect, useContext, useCallback} from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { Model } from './reuseComponent/Model';
import { cardAction } from './redux';
// import { connect, useDispatch, useSelector } from 'react-redux';
// import window from 'global'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Navebar = (props)=>{

    const dispatch = useDispatch();
    // dispatch(cardAction(JSON.parse(localStorage.getItem('card'))))
    const [cardDetail, setCardDetail] = useState()
    const [cardLeng, updateCardle] = useState(0);
    const [searchDrop, updSearchDrop] = useState(true);
    const handleUserKeyPress = useCallback(e => {
        console.log("e=====================>",e);
        if (document.getElementById('clickbox').contains(e.target)){
            // Clicked in box
            console.log("Clicked in box");
          }
          else if (document.getElementById('search_bar').contains(e.target)) {
              console.log("Clicked in side of search input box");
              updSearchDrop(false);
          }
          else{
            // Clicked outside the box
            console.log("Clicked outside the box");
            updSearchDrop(true);
        }
    },[])

    useEffect(() => {
        dispatch(cardAction(JSON.parse(localStorage.getItem('card'))))

        window.addEventListener('click',handleUserKeyPress);

        }
    )

    const [open, setOpen] = useState(false);
    const [isLogin, setIsLogin] = useState({});
    useEffect(() => {
        setIsLogin(localStorage.getItem('user'))
      }, [])

    const handleClickOpen = () => {
        open?setOpen(false):setOpen(true);
      console.log("open-=-=->",open);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function getData(data){
        console.log("data-------3--->",data);
        localStorage.setItem('user',JSON.stringify(data));
        setIsLogin(JSON.parse(localStorage.getItem('user')));
        setOpen(false);
    }
    // global.window = /*...*/ // BUT PLEASE DON'T DO THIS, keep reading
    const num = useSelector(state=>state.num);
    return(
        <>
            {/* <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand nav_a">WebSiteName</Link>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active nav_li"><a href="#" className="nav_a">Home</a></li>
                    <li className="dropdown nav_li">
                        <a className="dropdown-toggle nav_a" data-toggle="dropdown" href="#">Electronic<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                        <li className="li_drop"><Link to="/mobile">Mobiles</Link></li>
                        <li className="li_drop"><Link to="/">Laptop</Link></li>
                        <li className="li_drop"><Link to="/smat_wearable">Smart Wearable</Link></li>
                        </ul>
                    </li>
                    <li>
                    <div className="main_search_div">
                        <div style={{width: '100%'}}>
                            <input type="text" className="search_input"/>
                        </div>
                        <div className="search_div_icon">
                            <i className='fas searxh_icon'>&#xf002;</i>
                        </div>
                    </div>
                    </li>
                    </ul>
                    <Link to="/card_detail">
                        <i className='fas card_icon'>
                            &#xf07a;
                            {
                                (num && num > 0)?<div class="_2dcihZ">{num}</div>:''
                            }
                        </i>
                    </Link>
                </div>
            </nav> */}

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="inner_nav_div">
                        <div style={{display: 'flex'}}>
                            <div style={{padding: '13px 13px'}}>
                                <Link to="/">
                                    <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" width="70"/>
                                </Link>
                            </div>
                            <div className="new_search_div">
                                <div className="main_search_div" id="search_bar">
                                    <div style={{width: '100%'}}>
                                        <input type="text" placeholder="Search for products, brands and more" className="search_input" onClick={(e)=>{updSearchDrop(false)}}/>
                                    </div>
                                    <div className="search_div_icon">
                                        <i className='fas searxh_icon'>&#xf002;</i>
                                    </div>
                                </div>
                                <div className="search_drop_down" id="clickbox" style={{display: searchDrop?'none':'block'}}>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Mobiles</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Samsung Mobiles</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Brand Samsung</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Samsung</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Phone Samsung</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Smart Phone</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Smart Phone</Link></div>    
                                    </div>
                                    <div className="search_list">
                                        <div><i className='fas search_res_icon'>&#xf002;</i></div>
                                        <div className="search_res"><Link onClick={(e)=>{updSearchDrop(true)}} to="/mobile">Smart Phone</Link></div>    
                                    </div>
                                </div> 
                            </div>
                            <div className="my_acc_div">
                                <div>
                                {isLogin?<div className="nav_div_menu">My Account</div>:<div className="nav_div_menu" onClick={handleClickOpen} style={{cursor: 'pointer'}}>Login</div>}
                                </div>
                            </div>
                            <div className="my_acc_div">
                                <div>
                                    <div className="nav_div_menu">
                                        More
                                    </div>
                                </div>
                            </div>
                            <div className="my_acc_div">
                                <div>
                                    <div>
                                        <Link to="/card_detail">
                                            <i className='fas card_icon' style={{position:'relative'}}>
                                                &#xf07a;
                                                {
                                                    (num && num > 0)?<div class="new_count_of_item">{num}</div>:''
                                                }
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* <div></div> */}
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="menu_div" style={{zIndex: '3'}}>
                <div className="row">
                    <div className="col-sm-1">
                        <div class="dropdown">	
                            <div style={{display: 'flex'}}>                       
                                <div><button class="dropbtn">Electronic</button></div>
                                <div><i class="ic fa fa-angle-up"></i></div>
                            </div>
                            <div class="dropdown-content">
                                <Link to="/mobile">Mobiles</Link>
                                <Link to="/smat_wearable">Smart Wearable</Link>
                                {/* <a href="#">Link 3</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        <div class="dropdown">	
                            <div style={{display: 'flex'}}>                       
                                <div><button class="dropbtn">Application</button></div>
                                <div><i class="ic fa fa-angle-up"></i></div>
                            </div>
                            <div class="dropdown-content">
                                <a href="#">Link 10</a>
                                <a href="#">Link 20</a>
                                <a href="#">Link 30</a>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>

            <Model data={open} handleCloseChild={handleClose} sendData={getData}/>                                    
            {/* <div className="search_drop_down"></div>                 */}
        </>
    )
}

const mapStatetoProps = (state) =>{
    return{
        num: state.num
    }
}

// const mapDispatchtoProps = (dispatch) => {
//     return{
//         cardAction: function(){
//             dispatch(cardAction());
//         }
//     }
// }

export default Navebar;