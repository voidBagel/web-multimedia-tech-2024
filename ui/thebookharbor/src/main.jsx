import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './styles/App.css';
// Pages import
import Home from './pages/Home';
import ShowBooks from './components/ShowBooks';
import BookDetails from './pages/BookDetails';
import SignIn from './pages/SignIn';
import Test from './pages/Test';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/show-books', element: <ShowBooks /> },
    { path: '/show-book-details/:id', element: <BookDetails /> },
    { path: '/sign-in', element: <SignIn  /> },
    { path: '/test', element: <Test /> },
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='body'>
        <RouterProvider router={router}>
          
        </RouterProvider>
      </div>
      
  </React.StrictMode>
)