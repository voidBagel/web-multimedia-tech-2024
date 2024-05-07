import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Button } from 'react-bootstrap';
import axios from 'axios';
import createUtilityClassName from 'react-bootstrap/esm/createUtilityClasses';

import MyNavBar from '../components/MyNavBar';
import MySearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import { AsyncImage } from 'loadable-image';

function BookDetails(props) {
    const [book, setBook] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/books/${id}`)
            .then((res) => {
                setBook(res.data);
                console.log('Book:', res.data);
            })
            .catch((err) => {
                console.log('Error from ShowBookDetails');
            });
    }, [id]);
    
    
    
    const [user, setUser] = useState(null); // Define user state

    useEffect(() => {
      axios
        .get(`http://localhost:8082/api/users/${book.posted_by}`) //find by username
        .then((res) => {
          console.log('User data:', res.data);
          setUser(res.data); // Set user state with fetched data
        })
        .catch((err) => {
          console.log('Error fetching user data: ', err);
        });
    }, [book.posted_by]); // Trigger effect when book.posted_by changes
        console.log('User:', user);
    const BookItem =(
        <>
        <MyNavBar/>
        <MySearchBar/>
          <div className='container-md p-4'>
            <Row className='p-4'>
            
                <Row>
                <h2>{book.title}</h2>
                <AsyncImage key={book._id}
                    src={book.cover_url ? book.cover_url : 'https://via.placeholder.com/200'}
                    loader={<div style={{ background: 'var(--image-loader)' }} />}
                    style={{ width: '200px', height: '300px' }}
                    alt={book.title} 
                    className="p-2"/>
                <Col className='p-2'>
                    <div className='p-4'>
                    <p>Details:</p>
                    <table className='table'>
                        <tbody>
                            <tr>
                            <th scope="row">Author:</th>
                            <td>{book.author}</td>
                            </tr>
                            <tr>
                            <th scope="row">Description:</th>
                            <td>{book.description}</td>
                            </tr>
                            <tr>
                            <th scope="row">Genre:</th>
                            <td>{book.genre ? book.genre.join(', ') : ''}</td>
                            </tr>
                            <tr>
                                <th scope="row">Posted by:</th>
                               <td><Link to={`/profile/${user ? user._id:'Unknown'}`}>Posted by {user ? user.username : 'Unknown'}</Link></td> {/* Display user data  to={`/profile/${user._id}`} */}
                            </tr>
                        </tbody>
                    </table>
                    </div>  
                </Col>
                </Row>
                <Button variant="primary" className="button btn-lg mr-sm-2 me-md-2 mt-2" style= {{ width: '200px'}}onClick={console.log('not implemented yet')}>{book.action}</Button>
            </Row>
          </div>
          <Footer/>
        </>
    )

    return (
        <div>
            {BookItem}

        </div>
    );
}

export default BookDetails;