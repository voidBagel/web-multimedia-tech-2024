import React, { Component } from 'react';
import { jwtDecode } from 'jwt-decode';
import {Row, Col, Card} from 'react-bootstrap'
import { Avatar } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import { AsyncImage } from 'loadable-image';
import noBooksFound from '../assets/no-books-found.png';
import BookCard from './BookCard';
class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            username: '',
            favorites: [],
            books: [], // Initialize books array
            loading: true
        };
    }

    componentDidMount() {
        // Get token from local storage
        const token = localStorage.getItem('token');

        // Decode the token to access user information
        const decodedToken = jwtDecode(token);

        // Access user information from the decoded token
        const { user_id } = decodedToken;

        // Update component state with user ID
        this.setState({ user_id });

        // Fetch user's favorites based on user ID
        axios.get(`http://localhost:8082/api/users/${user_id}`) //find by username
        .then((res) => {
          console.log('User data:', res.data);  
                const { username, favorites } = res.data;
                console.log('Username:', username); // Log the username
                // Update component state with user's favorites
                this.setState({ username, favorites, loading: false });
            })
            .catch(error => {
                console.error('Error fetching user favorites:', error);
                this.setState({ loading: false });
            });

         // Fetch books posted by user
        axios.get(`http://localhost:8082/api/books/user/${user_id}`)
        .then((res) => {
            const { data } = res;
            this.setState({ books: data, loading: false }); // Update books state with data
        })
        .catch(error => {
            console.error('Error fetching user books:', error);
            this.setState({ loading: false });
        });
    }

    render() {
        const { user_id, username, favorites,books, loading } = this.state;
        console.log('User ID:', user_id); // Log the user_id
        console.log('Username (state):', username); // Log the username from state

        return (
            <div>
                <Row className="d-flex justify-content-center p-4"> 
                <Avatar sx={{ width: 128, height: 128 }}></Avatar>
                </Row>
                <Row> 
                <p  className="d-flex justify-content-center">@{username}</p>           
                </Row>
                <div className="d-flex justify-content-center" >
                <Row className='d-inline'>
                <Col  className="d-flex justify-content-center">
                <Row >0 borrowed</Row>
                </Col>
                <Col  className="d-flex justify-content-center">
                <Row >0 lent</Row>
                </Col>
                </Row>
                </div>
                <div className='p-4'>
                <Row className='p-4'>
                <p className='p-4'>My favorites:</p>
                <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div  className="d-flex justify-content-center">
                        {favorites && favorites.length > 0 ? (
                            <div className='p-4'>
                                <h2>Favorites</h2>
                                <ul>
                                    {favorites.map((favorite, index) => (
                                        <li key={index}>{favorite}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className='p-4'>
                                <Row className='p-4  d-flex justify-content-center'>
                                <img 
                                src={noBooksFound}
                                style={{ width: "236px", height: "310px"}}
                                className='p-4 '
                                />
                                </Row>

                                <Row>
                                <Col >
                                    <Row className='p-4  d-flex justify-content-center'>
                                    You haven't added any favorite books yet!
                                    </Row>
                                    <Row className='p-4'>
                                    <button className="button btn-lg mr-sm-2 px-4 me-md-2 ">Add Favorites</button>
                                    </Row>
                                </Col>
                                </Row>
                            </div>
                        )}
                    </div>
                )}

                </div>
                </Row>
                </div>
                {/* Render other user info as needed */}
                <div className='p-4'>
                <Row className='p-4'>
                <p className='p-4'>Manage my books:</p>
                <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div  className=" ">
                        {books && books.length > 0 ? (
                            <div className='p-4'>
                               <Row>
                                    {books.map((book, index) => (
                                        <Col key={book.id} xs={12} sm={6} md={5} lg={2}>
                                        <BookCard book={book} />
                                        <div className='d-flex justify-content-center'>
                                        <button className="remove-button" >Remove</button>
                                        </div>
                                      </Col>
                                    ))}
                                </Row>
                            </div>
                        ) : (
                            <div className='p-4'>
                                <Row className='p-4  d-flex justify-content-center'>
                                <img 
                                src={noBooksFound}
                                style={{ width: "236px", height: "310px"}}
                                className='p-4 '
                                />
                                </Row>

                                <Row>
                                <Col >
                                    <Row className='p-4  d-flex justify-content-center'>
                                    You haven't added any books yet!
                                    </Row>
                                    <Row className='p-4'>
                                    <button className="button btn-lg mr-sm-2 px-4 me-md-2 ">Add Books</button>
                                    </Row>
                                </Col>
                                </Row>
                            </div>
                        )}
                    </div>
                )}

                </div>
                </Row>
                </div>
            </div>
        );
    }
}

export default UserInfo;    