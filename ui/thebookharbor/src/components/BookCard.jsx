import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import axios from 'axios'; // Import axios for HTTP requests
import { Link } from 'react-router-dom';
import {AsyncImage} from 'loadable-image';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
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

  const navigateToDetails = () => {
   history.pushState(`/show-book-details/${book._id}`);
  }

  return (
    <div className='card col-sm' style={{ width: '200px', height: '500px' }} onClick={navigateToDetails}> 
    <AsyncImage
      className="card-img-top p-2"
      key={book._id}
      src={book.cover_url ? book.cover_url : 'https://via.placeholder.com/200'}
      loader={<div style={{ background: 'var(--image-loader)' }} />}
      style={{ width: '200px', height: '300px' }}
      />
      
      <div className='desc card-body'>
        <h3>
          <Link className='book-title' to={`/show-book-details/${book._id}`}>{book.title}</Link>
        </h3>
        <p style={{ fontSize: '16px' }}>{book.author}</p>
        <p className="card-subtext col">Posted by {user ? user.username : 'Unknown'}</p> {/* Display user data */}
      </div>
    </div>
  );
};

export default BookCard;
