import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import logo from '../assets/logo.png';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted dark-purple-bg ivory-text'>


      <section className='p-4'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <Row className='mt-3'>
            <Col  className='mx-auto mb-4'>
                <img src={logo} alt="logo" className="px-4"></img>
                <Link className="brand" to='/'>The Book Harbor</Link>
            </Col>
            <Col md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <p className='mb-4 ivory-text'>Useful links:</p>
              <p>
                <a href='#!' className='nav-link'>
                  Browse by genre
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Academic books
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Books to trade
                </a>
              </p>
              <p>
                <a href='#!' className='nav-link'>
                  Books to borrow
                </a>
              </p>
            </Col>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 '>
              <p className=' mb-4 ivory-text'>Contact:</p>
                <p className='ivory-text'>
                <MailOutlineIcon sx={{paddingRight:'8px', color:'var(--ivory)' , fontSize: 40 }}/>
                    aliceeid@hotmail.com
                </p>
              
            </MDBCol>
          </Row>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'var(--jungle-green)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href=''>
          The Book Harbor
        </a>
      </div>
    </MDBFooter>
  );
}