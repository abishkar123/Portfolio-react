
import { Button } from 'bootstrap';
import './App.css';
import { AboutMe } from './component/AboutMe';
import { ContactMe } from './component/ContactMe';
import { Experience } from './component/Experience';
import { Hero } from './component/Hero';
import { Skills } from './component/Skills';


function App() {
  return (
      <div class="wrapper">
<Hero/>
    
     



{/* <!-- Skills section  --> */}

<Skills/>

{/* <!-- Experiences  --> */}


<Experience/>

{/*!-- About me Section --> */}


<AboutMe/>

{/* <!-- Contact Section --> */}


<ContactMe/>


 {/* <!-- footer section --> */}
 <footer class="footer bg-dark text-light text-center py-5 mt-5">
  Copyritght &copy; all reserved. Made with Abishkar Rai.
</footer>

</div>

     
    
  );
}

export default App;
