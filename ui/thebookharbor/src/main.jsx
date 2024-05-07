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
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Trade from './pages/Trade';
import Borrow from './pages/Borrow';
import SearchResultsPage from './pages/SearchResultsPage';
import Test from './pages/Test';
import Search from '@mui/icons-material/Search';
import MyProfile from './pages/MyProfile';
import Academic from './pages/Academic';

const router = createBrowserRouter(
  [
    { path: '/', element: <Home /> },
    { path: '/home', element: <Home /> },
    { path: '/show-books', element: <ShowBooks /> },
    { path: '/show-book-details/:id', element: <BookDetails /> },
    { path: '/sign-in', element: <SignIn  /> },
    { path: '/sign-up', element: <SignUp /> },
    { path: '/test', element: <Test /> },
    { path: '/my', element: <MyProfile/>},
    { path: '/profile/:id', element: <Profile />},
    {path: '/trade', element: <Trade />},
    {path: '/borrow', element: <Borrow />},
    {path: "/academic" , element:<Academic/>},
    {path: '/search-results', element: <SearchResultsPage />}
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