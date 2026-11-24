
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Download from './pages/register/Download';
import Pending from './pages/register/Pending';
import RegisterBank from './pages/register/RegisterBank';

const APP_VERSION = 'v0.0.7';

const versionStyle = {
  position: 'fixed',
  right: '8px',
  bottom: '6px',
  fontSize: '12px',
  color: '#999',
  pointerEvents: 'none',
  zIndex: 1000,
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/register_bank" element={<RegisterBank />} />
        <Route path="/download" element={<Download />} />
      </Routes>
      <div style={versionStyle}>{APP_VERSION}</div>
    </Router>
  );
}

export default App
