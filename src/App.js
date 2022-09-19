import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from 'pages/LandingPage';
import ExamplePage from 'pages/ExamplePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/projects' element={<LandingPage />} />
          <Route path='/example' element={<ExamplePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
