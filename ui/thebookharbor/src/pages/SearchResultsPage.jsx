import React from "react";
import SearchResults from "../components/SearchResults";
import MyNavBar from "../components/MyNavBar";
import MySearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

class SearchResultsPage extends React.Component {
  render() {
    return (
        <>
        <MyNavBar />
        <MySearchBar/>
      <SearchResults />
      <Footer/>
        </>
    );
  }
}

export default SearchResultsPage;