import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../UserAPI';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Register() {
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
    const response = await registerUser(user);
    if (response._id) {
      alert('Registration success! Loggin in...')
      navigate('/');
    } else {
      console.error('Registration failed:', response.message);
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
      <Button type="submit">Register</Button>
    </Form>
  );
}

export default Register;
// add note that registered successfully and navigate to NotesLIst component
