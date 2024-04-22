import React, {useState} from "react";
import PropTypes from 'prop-types';
import { Row, Col} from "react-bootstrap";
import { Card, OutlinedInput, Snackbar } from "@mui/material";
import signInImg from "../assets/sign-in.png";
import logo from "../assets/logo.png";

async function login(credentials) {
  console.log('login user called, credentials:', credentials);
  try {
    const response = await fetch('http://localhost:8082/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    if (!response.ok) {
      throw new Error('Failed to login');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}

const SignIn = () =>{

  const [userIdentifier, setUserIdentifier] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{

      const token = await login({
        username: userIdentifier,
        email: userIdentifier, // or email: userIdentifier
        password
    });
    localStorage.setItem('token', token.token);
    window.location.href = '/home';
    }
    catch(err){
      console.error("error in login");
      setError('Login failed. Please try again.');
    }
  }
    return (
      <div className="dark-purple-bg " style={{height:"100vh"}}>
        <img src={logo} className="p-4" style={{marginRight:'auto', marginLeft:'auto', display:'block'}}/>
        <Card className="p-4" style={{backgroundColor:'var(--ivory)', margin:'64px', height:"60vh"}}>
            <Row>
                <Col >
                <img
                src={signInImg}
                style={{ width: "592px", height: "333px"}}
                className="p-4"
                />
                </Col>
                <Col className="p-4" >
                <form onSubmit={handleSubmit}>
                <Row><h1>Welcome back!</h1></Row>
                <Row className="p-2">
                <OutlinedInput type="text" placeholder="Username or Email" required onChange={(e)=>setUserIdentifier(e.target.value)} sx={{ width: '50ch'}}/>
                </Row>

                <Row className="p-2">
                <OutlinedInput type= "password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} sx={{ width: '50ch'}}/>
                </Row>

                <Row  className="">
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button type="submit" className="button btn-lg mr-sm-2 px-4 me-md-2">Sign in</button>
                </div>
                </Row>
                </form>
                </Col>
            </Row>
            
        </Card>
        <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)}>
        <div className="alert alert-danger">{error}</div>
      </Snackbar>
      </div>
    );
  }

SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
}
export default SignIn;