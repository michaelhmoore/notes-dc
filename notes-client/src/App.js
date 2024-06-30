import './App.css';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import NewNote from './components/NewNote';
import NotesList from './components/NotesList';
import EditNote from './components/EditNote';

function App() {
  return (
    <Container className='mt-3'>
      <Header />
      <Routes>
        <Route path='/' element = {<NotesList />} />
        <Route path='/new' element = {<NewNote />} />
        <Route path="/edit/:noteId" element={<EditNote />} />           
      </Routes>
    </Container>
  )
}

export default App;
