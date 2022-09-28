import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectsPage from 'pages/ProjectsPage';
import CertificatesPage from 'pages/CertificatesPage';
import ExamplePage from 'pages/ExamplePage';
import ProjectDetailPage from 'pages/ProjectDetailPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/project/:slug' element={<ProjectDetailPage />} />
          <Route path='/certificates' element={<CertificatesPage />} />
          <Route path='/example' element={<ExamplePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
