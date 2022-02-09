// Esse módulo contém códigos do Curso React
// do canal no Youtube "Matheus Battisti"
// Playlist do curso:
// https://www.youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Project from './components/pages/Project'

import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'


function App() {
    return (
      <Router> 
        <ul>
          <NavBar />
        </ul>
  
          <Container customClass="min-height">
            <Routes>
              <Route exact path= "/" element={<Home/>}/> 
              <Route path= "/Company" element={<Company/>}/> 
              <Route path= "/Contact" element={<Contact/>}/>
              <Route path= "/Projects" element={<Projects/>}/> 
              <Route path= "/NewProject" element={<NewProject/>}/>
              <Route path= "/Project/:id" element={<Project/>}/>     
            </Routes>
          </Container>
          <Footer />

      </Router>
    );
  }

export default App
