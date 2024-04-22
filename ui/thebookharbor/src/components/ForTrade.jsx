import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';

import BookCard from './BookCard';
import { Row, Col } from 'react-bootstrap';

function ForTrade() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:8082/api/books/trade')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookList');
        });
    }, []);

    const bookList =
    books.length === 0
      ? <p>There are no books available for trade.</p>
      : books.slice(0, 6).map((book) => (
          <Col key={book.id} xs={12} sm={6} md={5} lg={2}>
            <BookCard book={book} />
          </Col>
        ));
  
    return (
        <div className='p-4'>
            <h1 className='p-4'>Books Available for Trade</h1>
            <p className='px-4 lead'>Gems you get to keep!</p>
        <Row className='ShowBookList p-4'>
            {bookList}
        </Row>
      </div>
    );
  
}

export default ForTrade;