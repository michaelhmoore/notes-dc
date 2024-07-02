// Landing.js
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landing() {
  return (
    <div className="d-flex vh-100">
      <Row className='m-auto align-self-center text-center'>
        <Col>
          <h2>Welcome to SimplyNoting</h2>
          <p>The best place to organize your notes.</p>
          <LinkContainer to="/login">
            <Button className='m-2'>
              Login
            </Button>
          </LinkContainer>
          <LinkContainer to="/register">
            <Button className='m-2'>
              Register
            </Button>
          </LinkContainer>
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
