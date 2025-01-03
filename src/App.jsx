
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Download from './pages/register/Download';
import Pending from './pages/register/Pending';
import RegisterBank from './pages/register/RegisterBank';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/register_bank" element={<RegisterBank />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}

export default App
