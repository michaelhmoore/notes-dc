import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import NewNote from './components/NewNote';
import NotesList from './components/NotesList';
import EditNote from './components/EditNote';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, [navigate]);


  return (
    <Container className='mt-3'>
      <Header />
      <Routes>
        <Route path='/' element = {token ? <NotesList /> : <Landing />} />
        <Route path='/new' element = {token ? <NewNote /> : <Landing />} />
        <Route path="/edit/:noteId" element={token ? <EditNote /> : <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />           
      </Routes>
    </Container>
  )
}

export default App;
