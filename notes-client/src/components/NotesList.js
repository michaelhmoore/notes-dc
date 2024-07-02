import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Note from './Note';
import { getNotes, deleteNote } from '../NoteAPI';

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function deleteFromList(noteId) {
    deleteNote(noteId);
    setNotes(prevNotes => prevNotes.filter(
      note => note._id !== noteId));
  }

  useEffect(() => {
    async function getAllNotes() {
      const notes = await getNotes();
      console.log('fetched notes', notes);
      setNotes(notes);
      setIsLoading(false);
    }

    getAllNotes().catch(error => {
      console.error('Error in getAllNotes:', error);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading
        ? (
          <Spinner animation='border' role='status'>
          <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          notes.length > 0 ? (
            notes.map(note => (
              <Note key={note._id} value={note} delete={deleteFromList} />
            ))
          ) : (
            <p>No notes available.</p>
          )
      )}
    </>
  );
}

export default NotesList;