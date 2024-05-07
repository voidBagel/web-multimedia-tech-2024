import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "react-bootstrap";
import BookCard from "../components/BookCard";
import Footer from "../components/Footer";
import MySearchBar from "../components/SearchBar";
import MyNavbar from "../components/MyNavBar";
import Pagination from "@mui/material/Pagination";

function BookList({ fetchEndpoint, title }) {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(8); // Number of items to display per page
    const [sortAsc, setSortAsc] = useState(true); 

    useEffect(() => {
        fetchBooks();
    }, [sortAsc, fetchEndpoint]); 

    const fetchBooks = () => {
        axios
            .get(fetchEndpoint)
            .then((res) => {
                const sortedBooks = sortAsc
                    ? res.data.slice().sort((a, b) => a.title.localeCompare(b.title))
                    : res.data.slice().sort((a, b) => b.title.localeCompare(a.title));
                setBooks(sortedBooks);
            })
            .catch((err) => {
                console.log('Error fetching books:', err);
            });
    };

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

    const toggleSort = () => {
        setSortAsc(!sortAsc);
    };

    const bookList =
        currentBooks.length === 0
        ? <p>There are no books available for {title.toLowerCase()}.</p>
        : currentBooks.map((book) => (
            <Col key={book.id} xs={12} sm={6} md={4} lg={3}>
                <BookCard book={book} />
            </Col>
        ));

    return (
        <>
            <MyNavbar/>
            <MySearchBar/>
            <div className='p-4'>
                <h1 className='p-4'> {title}</h1>
                <div className="p-4 sort-button-container d-flex justify-center">
                    <Button className="sort-button" onClick={toggleSort} variant="outline-primary">
                        {sortAsc ? "Sort Z to A" : "Sort A to Z"}
                    </Button>
                </div>
                <Row className='ShowBookList p-4'>
                    {bookList}
                </Row>
                <div className="pagination-container d-flex justify-content-center">
                    <Pagination 
                        count={Math.ceil(books.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined" 
                        size="large" 
                    />
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default BookList;
