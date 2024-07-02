import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newNote } from '../NoteAPI';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NewNote() {
  const [show, setShow] = useState(true);
  const [inputs, setInputs] = useState({ title: '', noteText: ''});

  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate(-1);
    //set up cancel/x route vs. save route, separate functions
  };
  function handleChange(name, value) {
    setInputs(values => ({ ...values, [name]: value }));
  }

  /*async function handleSave() {
    await newNote(note);
    handleClose();
  }*/

  async function handleSubmit(e) {
    e.preventDefault();

    const note = {
      title: inputs.title,
      text: inputs.noteText
    };

    await newNote(note);
    handleClose();
  }
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        Create a new note
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='title'>
            <Modal.Title>
              <Form.Label>title</Form.Label>
              <Form.Control type='text' value={inputs.title} onChange={(e) => handleChange('title', e.target.value)} />
            </Modal.Title>
          </Form.Group>
          <Form.Group className='mb-3' controlId='noteText'>
            <Modal.Body>
              <Form.Label>noteText</Form.Label>
              <Form.Control as='textarea' rows={3} value={inputs.noteText} onChange={(e) => handleChange('noteText', e.target.value)} />
            </Modal.Body>
          </Form.Group>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>      
            <Button variant='primary' type='submit'>
              Save note            
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>    
    </>
  );
}

export default NewNote;