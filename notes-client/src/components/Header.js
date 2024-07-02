import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  // create header that's changed based on authenitcation

  /*const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setAuthenticated(!!token);
  }, [])*/

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/');
    window.location.reload();
  }

  return (
    <Row>
      <LinkContainer to='/'>
      <Col><h1>SimplyNoting</h1></Col>
      </LinkContainer>
      <Col className='text-end'>
        {token ? (
          <>
          <Button variant='secondary' onClick={handleLogout}>Logout</Button>
            <LinkContainer to='/new'>
              <Button className='ms-2 float-end'>
                New note
              </Button>
            </LinkContainer>
          </>
        ) : (
          <>
            <LinkContainer to='/register'>
              <Button className='ms-2' variant='outline-secondary'>
                Register
              </Button>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Button className='ms-2 float-end' variant='outline-primary'>
                Login
              </Button>
            </LinkContainer>
          </>
        )}
      </Col>
    </Row>
  );
}

export default Header;