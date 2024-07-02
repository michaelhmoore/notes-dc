import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../UserAPI';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  function handleChange(name, value) {
    setInputs(values => ({ ...values, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: inputs.username,
      password: inputs.password,
    };
    const response = await loginUser(user);
    if (response.token) {
      localStorage.setItem('token', response.token);
      navigate('/');
    } else {
      console.error('Login failed:', response.message);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={inputs.username}
          onChange={(e) => handleChange('username', e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={inputs.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </Form.Group>
      <Button type="submit" className='mt-3 float-end' variant='outline-primary'>Login</Button>
    </Form>
  );
}

export default Login;
// upon Login, link to NotesList. set it up where it says no NOtes! create a new one!
//also two logout buttons on localhost:3000 landing page even tho im logged in it also shows register and login
