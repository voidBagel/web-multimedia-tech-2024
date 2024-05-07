import React, { useState } from 'react';
import { Card, OutlinedInput } from '@mui/material';
import {Row, Col} from 'react-bootstrap';
import signUpImg from '../assets/sign-up.png';
import logo from '../assets/logo.png';

import axios from 'axios';

function SignUp(){
    const institutionOptions = {
        school: ["Antonine Sisters School", "École Saint Joseph", "Beirut Baptist School",
        "Lebanon Evangelical School", "École Jésus Et Marie", "LWIS Adma International School",
        "The International School of Choueifat", "Collège Notre Dame de Louaize"],
        university: ["Lebanese University", "American University of Beirut(AUB)", "Lebanese American University(LAU)",
        "University of Balamand", "Haigazian University", "Beirut Arab University(BAU)", "Lebanese International University(LIU)",
        "Saint Joseph University(USJ)", "Académie Libanaise des Beaux-Arts(ALBA)", "Université Antonine(UA)",
        "American University of Science and Technology(AUST)","Arab Open University(AOU)"]
    };
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        institution_name: '',
        institution_type: ''
    });
    const handleTypeChange = (e) => {
        setFormData({ ...formData, institution_type: e.target.value, institution_name: '' });
    };

    const handleNameChange = (e) => {
        setFormData({ ...formData, institution_name: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = new FormData();
            newUser.append('username', formData.username);
            newUser.append('email', formData.email);
            newUser.append('password', formData.password);
            newUser.append('institution_name', formData.institution_name); // Adjusted to match backend
            newUser.append('institution_type', formData.institution_type); // Adjusted to match backend
            const res = await axios.post('http://localhost:8082/api/users', newUser);
            console.log(res.data);
            //redirect the user to another page after successful sign-up
        } catch (err) {
            console.error(err);
            // Handle error, display error message, etc.
        }
    };
    
    return (
    <div className="dark-purple-bg " style={{height:"130vh"}}>
        <img src={logo} className="p-4" style={{marginRight:'auto', marginLeft:'auto', display:'block'}}/>
        <Card className="p-4" style={{backgroundColor:'var(--ivory)', margin:'64px', height:"100vh"}}>
        <h1 className='px-4'>Register now!</h1>
        <Row>
        <Col className="p-4" style={{width:"70vh"}}>
        <form onSubmit={handleSubmit}>
            <Row className="p-2">
            <OutlinedInput type="text" placeholder="Username" value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} required />
            </Row>
            <Row className="p-2">
            <OutlinedInput type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
            </Row>
            <Row className="p-2">
            <OutlinedInput type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} required />
            </Row>
            <Row className="p-2">
            <label>Institution Type:</label>
            <div>
                <input type="radio" id="school" name="institutionType" value="school" checked={formData.institution_type === "school"} onChange={handleTypeChange} />
                <label className='p-2'htmlFor="school">School</label>
                <input style={{marginLeft:'64px'}} type="radio" id="university" name="institutionType" value="university" checked={formData.institution_type === "university"} onChange={handleTypeChange} />
                <label className='p-2' htmlFor="university">University</label>
            </div>
            
            </Row>  
            <Row className="p-2">
            <label className='p-2'>Institution Name:</label>
            <select className='dropdown-institutions' value={formData.institution_name} onChange={handleNameChange} required>
                <option value="">Select Institution Name</option>
                {formData.institution_type && institutionOptions[formData.institution_type].map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
            </Row>     
            <button type="submit" className="button btn-lg mr-sm-2 px-4 me-md-2">Register</button>
        </form>
        </Col>
        <Col >
        <img
        src={signUpImg}
        style={{ width: "600px", height: "500px"}}
        className="p-4"
        />
        </Col>
        </Row>
        </Card>
    </div>);
}

export default SignUp;