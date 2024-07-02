import React, { useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Note from './Note';
import { getNotes, deleteNote } from '../NoteAPI';
import { useNavigate } from "react-router-dom";


function NotesList() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');
const navigate = useNavigate();



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

    if (!token) {
      navigate('/');
    } 
  }, [navigate, token]);

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
            <p>Oops! You haven't written any notes! Create a new one to get started !</p>
          )
      )}
    </>
  );
}

export default NotesList;