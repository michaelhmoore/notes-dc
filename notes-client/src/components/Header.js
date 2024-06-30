import { LinkContainer } from 'react-router-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <Row>
      <Col><h1>SimplyNoting</h1></Col>
      <Col>
        <LinkContainer to='/new'>
          <Button className='float-end'>
            New note
          </Button>
        </LinkContainer>
      </Col>
    </Row>
  );
}

export default Header;