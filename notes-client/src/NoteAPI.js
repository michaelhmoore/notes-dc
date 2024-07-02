const apiEndpoint = "http://localhost:8000/api/notes";

async function getNotes() {
  try {
    const response = await fetch('http://localhost:8000/api/notes');
    const data = await response.json();
    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('data is not an array', data);
      return [];
    }
  } catch (error) {
    console.error('error fetching notes', error);
    return [];
  }

}

async function getNote(noteId) {
   const response = await fetch(`${apiEndpoint}/${noteId}`);
   if (response.ok) {
      return response.json();       
   }
   else {
      console.log(response);
      return null;
   }
}

async function newNote(note) {
   const response = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
   })
   if (response.ok) {
      return response.body;       
   }
   else {
      console.log(response);
      return null;
   }
}

async function editNote(noteId, notePart) {
   const response = await fetch(`${apiEndpoint}/${noteId}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(notePart),
   })
   if (response.ok) {
      return response.body;
   }
   else {
      console.log(response);
      return null;
   }
}

async function deleteNote(noteId) {
   const response = await fetch(`${apiEndpoint}/${noteId}`, {
      method: "DELETE"
   });
   if (response.ok) {
      return response.body;
   }
   else {
      console.log(response);
      return null;
   }
}

export {      
   getNotes,
   getNote,
   newNote,
   editNote,
   deleteNote
};