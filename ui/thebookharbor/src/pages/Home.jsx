import React from 'react';
import MyNavBar from '../components/MyNavBar';
import Hero from '../components/Hero';
import ForTrade from '../components/ForTrade';
import '../styles/App.css';
import MySearchBar from '../components/SearchBar';


class Home extends React.Component {
    render() {
        return (
          <>
          <MyNavBar />
          <MySearchBar/>
          <Hero />
          <ForTrade />
          </>
        );
    }
}

export default Home;