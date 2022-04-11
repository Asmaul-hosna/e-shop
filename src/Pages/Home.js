import React from 'react';
import Announcement from '../Components/Announcement';
import Categories from '../Components/Categories';
import Footer from '../Components/Footer';
import Navber from '../Components/Navber';
import NewsLetter from '../Components/NewsLetter';
import Products from '../Components/Products';
import Slider from '../Components/Slider';


const Home = () => {
    return (
        <div>
          <Announcement/>
          <Navber/>
          <Slider/>
          <Categories/>
          <Products/>
          <NewsLetter/>
          <Footer/>
        </div>
    );
};

export default Home;
