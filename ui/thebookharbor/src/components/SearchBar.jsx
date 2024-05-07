import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect } from "react";
import axios from "axios";
import "../styles/SearchBar.css";


const MySearchBar = () => {
  const [value, setValue] = useState("");


  const searchTerms = [
    "Science",
    "Philosophy",
    "Academic",
    "Fantasy",
    "Comic",
    "Graphic Novel",
    "Superhero",
    "Dystopian",
    "Computer Science",
    "Programming",
    "Algorithms",
    "Data Structures",
    "Mythology",
    "Fiction",
    "Political Science",
    "Communism",
    "Revolution",
    "Science Fiction",
    "Romance",
    "Comedy"
  ];
  let testArray = [];
  const [searchList, setSearchList] = useState(searchTerms);
  //save these results to display them in the search results div .search-results
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {

    if (searchList.length > 0) {
      
      searchList.forEach(element => {
        console.log(element.replace(/\s/g, '').toLocaleLowerCase());
        axios
          .get(`http://localhost:8082/api/books/search?value=${element.replace(/\s/g, '').toLocaleLowerCase()}`)
          .then((res) => {
            const data = res.data;
            console.log(data);
            //testArray.push(res.data);
            saveSearchResultsToCache(data);
            
          });
          
      });
    }
  }, [searchList, setSearchResults, axios]);
  
  //save search results to cache
  const saveSearchResultsToCache = (results) => {
    localStorage.setItem("searchResults", JSON.stringify(results));
    //get search results from cache

  };


  const handleSearchFrontend = () => {
      if(value === "") {
       // setSearchList(searchTerms); 
        return;
      }
      const filteredList = searchTerms.filter((term) =>{
        if(term.toLowerCase().includes(value.toLowerCase()))
        { 
          return term.toLocaleLowerCase;
         }
      });
      setSearchList(filteredList);
      
        
    };
    

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  const handleSearch = () => {
  if(searchList.length>0 && value !== ""){
    
      console.log("Searching for:");
      searchList.forEach(item => {
        console.log(item);
       });
       //iterate through searchList 
      

    }
    else{
      console.log("Searching for value not in array:", value.toLowerCase()); //if the searchList is empty, search for the value in isbn, title, author
      //search by isbn, title, author
      

    }
  }
  const handleKeyUp = (event) => {
    handleSearchFrontend();
    if(event.key === "Enter") {
      handleSearch();
      window.location.href = "/search-results";
    }
  };

  const handleFocus = () => {
    setSearchList(searchTerms); // Reset search list when input is focused
    document.querySelector('.search-dropdown').style.display = 'block';
  };

  const handleBlur = () => {
    document.querySelector('.search-dropdown').style.display = 'none';
  };

  return (
    <div  className="sticky-search-bar">
    <Paper sx={{  display: 'flex', alignItems: 'center' }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search by ISBN, title, author..."
        inputProps={{ 'aria-label': 'search' }}
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        onFocus={handleFocus}
          onBlur={handleBlur}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton >
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
    <div className="search-dropdown" style={{display:'none'}}>
      {searchList.map((term) => (
        <p key={term} onClick={() => setValue(term)}>{term}</p>//make it clickable, send value to backend to search for it in the db
      ))}
    </div>
     
    </div>
  )
};
export default MySearchBar;
