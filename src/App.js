import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ProjectsPage from 'pages/ProjectsPage';
import CertificatesPage from 'pages/CertificatesPage';
import ProjectDetailPage from 'pages/ProjectDetailPage';
import Counter from 'pages/Counter';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/wapsite' element={<LandingPage />} />
          <Route path='/wapsite/projects' element={<ProjectsPage />} />
          <Route path='/wapsite/project/:slug' element={<ProjectDetailPage />} />
          <Route path='/wapsite/certificates' element={<CertificatesPage />} />
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
