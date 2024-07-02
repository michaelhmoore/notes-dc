import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, editNote} from '../NoteAPI'
import Modal from 'react-bootstrap/Modal'

function EditNote() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({title: '', noteText: ''});
  const [show, setShow] = useState(true);

  function handleChange(name, value) {
    setInputs(values => ({ ...values, [name]: value}));
  }

  const handleClose = () => {
    setShow(false);
    navigate(-1);
    //set up cancel/x route vs. save route, separate functions
  };
  async function handleSubmit(e) {
    e.preventDefault();
    const notePart = {
      title: inputs.title,
      text: inputs.noteText
    };

    await editNote(noteId, notePart);
    navigate('/');
  }

  useEffect(() => {
    async function loadNote() {
      const note = await getNote(noteId);
      setInputs({
        title: note.title,
        noteText: note.text
      });
    }
    loadNote();
  }, [noteId])

  return (
    <>
      <Modal show={true} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='title'>
            <Modal.Header closeButton>
              <Modal.Title>
                <Form.Label>title</Form.Label>
                <Form.Control type='text' value={inputs.title} onChange={(e) => handleChange('title', e.target.value)} />
              </Modal.Title>
            </Modal.Header>
          </Form.Group>
          <Form.Group className='mb-3' controlId='noteText'>
            <Modal.Body>
              <Form.Label>noteText</Form.Label>
              <Form.Control as='textarea' rows={3} value={inputs.text} onChange={(e) => handleChange('noteText', e.target.value)} />
            </Modal.Body>
          </Form.Group>
          <Modal.Footer>
            <Button variant='secondary' type='button' onClick={handleClose}>
              Close
            </Button>      
            <Button variant='primary' type='submit' className='me-2' onClick={handleClose}>
              Save edits            
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>    
    </>
  );
}

export default EditNote;