import React from 'react';
import MyNavBar from '../components/MyNavBar';
import Hero from '../components/Hero';
import ForTrade from '../components/ForTrade';
import '../styles/App.css';
import MySearchBar from '../components/SearchBar';
import Footer from '../components/Footer';


function Home() {
    return (
      <>
      <MyNavBar />
      <MySearchBar/>
      <Hero />
      <ForTrade />
      <Footer/>
      </>
    );
    
}

export default Home;