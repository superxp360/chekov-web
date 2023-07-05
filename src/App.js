import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/login/page'
import './styles/App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<h1>Chekov Todo</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
