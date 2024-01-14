import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'

import HomePage from './pages/Homepage/Homepage'
import NotFound from './pages/404'
import Lawyers from './pages/Lawyers/LawyersPage'
import AboutPage from './pages/About/AboutPage'
import ContactPage from './pages/Contact/ContactPage'


function App() {



  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/advokaterne" element={<Lawyers />} />
        <Route path="/om-os" element={<AboutPage />} />
        <Route path="/kontakt" element={<ContactPage />} />

      </Routes>
    </Router>
  )
}

export default App
