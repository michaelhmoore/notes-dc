import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Landing() {
  return (
    <Container fluid className='d-flex justify-content-center align-items-center vh-100'>
      <Row className='text-center'>
        <Col>
          <h2 className='display-3'>Welcome to SimplyNoting</h2>
          <p className='lead'>The best place to organize your notes.</p>
          <LinkContainer to="/register">
            <Button className='m-2' variant='outline-secondary'>
              Register
            </Button>
          </LinkContainer>
          <LinkContainer to="/login">
            <Button className='m-2' variant='outline-primary'>
              Login
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
