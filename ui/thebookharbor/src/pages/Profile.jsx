import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import { Avatar } from '@mui/material';

import MyNavBar from '../components/MyNavBar';
import MySearchBar from '../components/SearchBar';

function Profile(props){
    const [user, setUser] = useState({});
    const {id} = useParams();
    const [booksBorrow, setBooksBorrow] = useState({});

    useEffect(() => {
        axios
          .get(`http://localhost:8082/api/users/${id}`) //find by username
          .then((res) => {
            console.log('User data:', res.data);
            setUser(res.data); // Set user state with fetched data
          })
          .catch((err) => {
            console.log('Error fetching user data: ', err);
          });
      }, [id]); 

    useEffect(()=>{
        axios
            .get(`http://localhost:8082/api/books/`)
    })
    return(
        <div>
            <MyNavBar/>
            <MySearchBar/>
            <Row className="d-flex justify-content-center p-4"> 
                <Avatar sx={{ width: 128, height: 128 }}></Avatar>
            </Row>
            <Row> 
                <p  className="d-flex justify-content-center">@{user.username}</p>           
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
                <p className='p-4'>{user.username}'s favorites:</p>
                <div>

                </div>
                </Row>
            </div>
            <div className='p-4'>
                <Row className='p-4'>
                <p className='p-4'>Books to borrow from {user.username}:</p>
                <div>

                </div>
                </Row>
            </div>
        </div>
    );
}

export default Profile;