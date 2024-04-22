import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import { Row, Col } from 'react-bootstrap';

function ShowBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const bookList =
  books.length === 0
    ? <p>There are no books available.</p>
    : books.map((book) => (
        <Col key={book.id} xs={12} sm={6} md={5} lg={2}>
          <BookCard book={book} />
        </Col>
      ));

  return (

    <Row className='ShowBookList p-4'>
        {bookList}
    </Row>
  );
}

export default ShowBooks;
