/* eslint-disable prettier/prettier */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Levels from './Pages/Levels';
import Invites from './Pages/Invites'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Levels />} />
        <Route path='/profiles' element={<Invites />} />
      </Routes>
    </Router>
  );
}
