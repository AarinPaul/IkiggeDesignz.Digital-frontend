import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// ✅ Import WhatsAppButton
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />                 {/* "/" */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div className="p-8">Not Found</div>} />
        </Route>
      </Routes>

      {/* ✅ Floating WhatsApp button visible on all pages */}
      <WhatsAppButton />
    </>
  )
}

export default App
