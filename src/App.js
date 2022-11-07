
import { Button } from 'bootstrap';
import './App.css';
import { AboutMe } from './component/AboutMe';
import { ContactMe } from './component/ContactMe';
import { Experience } from './component/Experience';
import { Hero } from './component/Hero';
import { Skills } from './component/Skills';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Footer } from './component/Footer';


function App() {
  return (
    <div class="wrapper">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Hero />} />
      <Route path= "/Skills" element={<Skills />} />
      <Route path= "/Experience" element={<Experience />} />
      <Route path= "/ContactMe" element={<ContactMe />} />

      <Route path= "/AboutMe" element={<AboutMe />} />
      
      </Routes>
      </BrowserRouter>



</div>

     
    
  );
}

export default App;
