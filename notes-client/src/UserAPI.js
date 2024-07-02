const apiEndpoint = "http://localhost:8000/api/users";

async function registerUser(user) {
    const response = await fetch(`${apiEndpoint}/register`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
}

async function loginUser(user) {
   const response = await fetch(`${apiEndpoint}/login`, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return response.json();
}



export {      
   registerUser,
   loginUser
};