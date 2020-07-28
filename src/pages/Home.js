import React from 'react';
import Carousel from '../Carousel';
import MultiCarousel from '../MultiCarousel';
import Cards from '../Cards';
import Navebar from '../Navebar';

const Home = () => {
    var dashData = require('../mock_data/dashborad.json');
    return(
        <>
            {/* <Navebar /> */}
            <Carousel />
            <MultiCarousel data={dashData['dealsOfThDay']}/>
            <Cards data={dashData['banner1']} />
            <MultiCarousel data={dashData['phones']}/>
            <Cards data={dashData['banner2']} />        
        </>
    )
}

export default Home;