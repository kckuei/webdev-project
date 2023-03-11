import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage.js';
import BlogPage from './pages/BlogPage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import CatPage from './pages/CatPage.js';
import AddCatPage from './pages/AddCatPage.js';
import EditCatPage from './pages/EditCatPage.js';
import OrderPage from './pages/OrderPage.js';
import ContactPage from './pages/ContactPage.js';
import NotFound from './pages/NotFound.js';
import Navigation from './components/Navigation.js';
import Ribbon from './components/Ribbon.js';

import { MdEngineering } from 'react-icons/md';
import { GiPotato } from 'react-icons/gi';
import { FaCodeBranch } from 'react-icons/fa';
import { RiHeartsFill } from 'react-icons/ri';
import { GiBeaver } from 'react-icons/gi';


function App() {

  // Define a top level state for cat to share with the edit page (lifting up state). 
  const [catForEditing, setCatForEditing] = useState([])

  return (
    <>
      <BrowserRouter>

        <header>
          <h1>Kevin Kuei</h1>
          <p className="subtitle">
            <MdEngineering />  Civil Engineer  <FaCodeBranch />  Coding Amateur <RiHeartsFill /> Cat Lover  <GiPotato />  Couch Potato
          </p>
          <Navigation />
          <Ribbon />
        </header>

        <main>
          <section>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/staff" element={<StaffPage />} />
              <Route path="/cats" element={<CatPage setCatForEditing={setCatForEditing} />} />
              <Route path="/cats/create" element={<AddCatPage />} />
              <Route path="/cats/update" element={<EditCatPage catForEditing={catForEditing} />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </section>
        </main>

        <footer>
          <p className="footerText">Oregon State University</p>
          <p className="footerText">CS-290 Web Development - Winter 2023</p>
          <p className="footerText">&copy; 2023, Kevin Kuei</p>
          <p><GiBeaver size="30" /></p>
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
