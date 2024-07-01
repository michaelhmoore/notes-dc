import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function NewNote() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    navigate(-1);
    //set up cancel/x route vs. save route, separate functions
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Create a new note
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Title>note title</Modal.Title>
        <Modal.Body>note body</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>      
          <Button variant='primary' onClick={handleClose}>
            Save note            
          </Button>
        </Modal.Footer>
      </Modal>    
    </>
  );
}

export default NewNote;