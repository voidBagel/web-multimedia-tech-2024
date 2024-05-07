import React, { useEffect, useState } from "react";
import {Col, Row} from 'react-bootstrap';
import { Button } from "react-bootstrap";
import { Pagination } from "@mui/material";
import BookCard from "./BookCard";

function SearchResults() {
    const [searchResults, setSearchResults] = useState([]);
    const [sortAsc, setSortAsc] = useState(true); 
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8);
    useEffect(() => {
      const cachedSearchResults = localStorage.getItem("searchResults");
      if (cachedSearchResults) {
          setSearchResults(JSON.parse(cachedSearchResults));
      } else {
          setSearchResults([]);
      }
  }, []);

  // Sorting function
  const sortResults = () => {
      const sortedResults = [...searchResults].sort((a, b) => {
          if (sortAsc) {
              return a.title.localeCompare(b.title);
          } else {
              return b.title.localeCompare(a.title);
          }
      });
      setSearchResults(sortedResults);
  };

  const toggleSort = () => {
      setSortAsc(!sortAsc);
      sortResults();
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
};

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentBooks = searchResults.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="p-4">
          <div className="p-4 sort-button-container d-flex justify-center">
                    <Button className="sort-button" onClick={toggleSort} variant="outline-primary">
                        {sortAsc ? "Sort Z to A" : "Sort A to Z"}
                    </Button>
                </div>
        <Row>
      
        {currentBooks.map((result) => (
          
          <Col key={result.id} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={result} />
          </Col>
        ))}
      
    </Row>
    <p>{searchResults.length === 0 ? 'No results found.' : `${searchResults.length} result${searchResults.length === 1 ? '' : 's'} found`}</p>
    <div className="pagination-container d-flex justify-content-center">
                    <Pagination 
                        count={Math.ceil(searchResults.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined" 
                        size="large" 
                    />
                </div>
        </div>
    );
  }

export default SearchResults;