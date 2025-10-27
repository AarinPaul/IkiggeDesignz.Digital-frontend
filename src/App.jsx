import React from 'react'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Career from "./pages/Career";
import ThankYou from './pages/ThankYou.jsx' // ✅ New Import

// ✅ Import WhatsAppButton
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop.js'

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />                 {/* "/" */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/career" element={<Career />} />
          <Route path="thank-you" element={<ThankYou />} /> {/* ✅ New Route for submission success */}
          <Route path="*" element={<div className="p-8">Not Found</div>} />
        </Route>
      </Routes>

      {/* ✅ Floating WhatsApp button visible on all pages */}
      <WhatsAppButton />
    </>
  )
}

export default App