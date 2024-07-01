const apiEndpoint = "http://localhost:8000/api/notes";

async function getNotes() {
   const response = await fetch(apiEndpoint);
   if (response.ok) {
      return response.json();        
   }
   else {
      console.log(response);
      return null;
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

async function addNote(note) {
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
   addNote,
   editNote,
   deleteNote
};