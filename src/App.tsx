import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IndexPage from './pages';
import BlogPost from './pages/blogPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
