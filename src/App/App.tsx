import { Routes, Route } from 'react-router-dom'

// components
import { NavBar } from '@/components/navbar/Navbar'
import {Footer} from '@/components/footer/Footer'

// pages
import { Home } from '@/pages/home/Home'
import { AboutUs } from '@/pages/about-us/AboutUs'
import { ContactUs } from '@/pages/contact-us/ContactUs'
import { Courses } from '@/pages/courses/Courses'
import { Gallery } from '@/pages/gallery/Gallery'

// styles
/* The following line can be included in your src/index.js or App.js file */

import './App.scss';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  )
}
