import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Navebar from './Navebar';
import Carousel from './Carousel';
import MultiCarousel from './MultiCarousel';
import Cards from './Cards';
import ProductList from './reuseComponent/ProductList';
import ProductListWithDetail from './reuseComponent/ProductListWithDetail';
import Filter from './reuseComponent/Filter';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { MemoryRouter } from 'react-router';
import Home from './pages/Home';
import PoductDetail from './pages/ProductDetail';
import {Provider} from 'react-redux';
import { store } from './redux/store';
import { CardDetail } from './pages/CardDetail';
import { Footer } from './pages/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  var dashData = require('./mock_data/dashborad.json');
  return (
    <>
      {/* <Navebar />
      <Carousel />
      <MultiCarousel data={dashData['dealsOfThDay']}/>
      <Cards data={dashData['banner1']} />
      <MultiCarousel data={dashData['phones']}/>
      <Cards data={dashData['banner2']} />
      <ProductList />
      <ProductListWithDetail /> */}
      {/* <Filter /> */}
      <MemoryRouter>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <Navebar />
        <ScrollToTop />
        <div style={{marginTop: '90px'}}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/mobile' component={ProductListWithDetail}/>
            <Route exact path='/smat_wearable' component={ProductList}/>
            <Route exact path='/product_detail' component={PoductDetail}/>
            <Route exact path='/card_detail' component={CardDetail}/>
          </Switch>
        </div>
        <Footer/>
      </Provider>
      {/* </BrowserRouter> */}
      </MemoryRouter>
    </>
  );
}

export default App;
