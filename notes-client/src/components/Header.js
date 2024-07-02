import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  // create header that's changed based on authenitcation

  function handleLogout() {
    localStorage.removeItem('token');
    navigate('/login');
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
            <Button className='float-end me-2' onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <LinkContainer to='/login'>
              <Button className='ms-2 float-end'>
                Login
              </Button>
            </LinkContainer>
            <LinkContainer to='/register'>
              <Button className='ms-2'>
                Register
              </Button>
            </LinkContainer>
          </>
        )}
      </Col>
    </Row>
  );
}

export default Header;