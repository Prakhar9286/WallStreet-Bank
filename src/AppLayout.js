import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Loan from './components/Loan';
import Personal from './components/Personal';
import Layout from './Layout';

export default function AppLayout() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Header />} />
            
            <Route path="Personal" element={<Personal/>} />
            <Route path="Loan" element={<Loan />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<AppLayout />);