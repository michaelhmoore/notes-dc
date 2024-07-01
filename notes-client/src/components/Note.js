import { Card } from 'react-bootstrap/Card'
import { CloseButton } from 'react-bootstrap/CloseButton'
import ReactTimeAgo from 'react-time-ago';
import { Link } from 'react-router-dom'
import React from 'react';


function Note(props) {
  const note = props.value;
  const deleteNote = props.delete;
  const editRoute = `/edit/${note._id}`
  return (
    <Card className = 'mb-3'>
      <Card.Body>
        <CloseButton className='float-end' onClick={() => deleteNote(note._id)} />
        <Link to={editRoute} className='float-end'>edit</Link>
        {note.text}
      </Card.Body>
      <Card.Footer className='text-muted'>
        {note.username}
        <ReactTimeAgo className='float-end' date={new Date(note.posted)} locale='en-US' />
      </Card.Footer>

    </Card>
  );
}

export default Note;