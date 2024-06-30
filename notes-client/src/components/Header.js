import LinkContainer from 'react-router-bootstrap';
import { Button, Row, Col } from 'react-boostrap';

function Header() {
  return (
    <Row>
      <Col>SimplyNoting</Col>
      <Col>
        <LinkContainer>
          <Button className='float-end'>
            New note
          </Button>
        </LinkContainer>
      </Col>
    </Row>
  );
}

export default Header;