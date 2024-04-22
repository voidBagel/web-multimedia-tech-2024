import React from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import "../styles/SearchBar.css";

class MySearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleSearch = () => {
    console.log("Searching for:", this.state.value);
    // Implement your search logic here
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <Paper className="sticky-search-bar" sx={{ display: 'flex', alignItems: 'center' }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by ISBN, title, author..."
          inputProps={{ 'aria-label': 'search' }}
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={this.handleSearch}>
          <SearchIcon />
        </IconButton >
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </Paper>
    );
  }
}

export default MySearchBar;
