import React from 'react';
import './App.css';
import Contact from './Contact';
import rama from './images/ama.jpg';
import titi from './images/titi.jpg';
import sefakor from './images/sefakor.jpg';
import bertina from './images/bertina.jpg';


function App() {
  return (
    <div>
      <Contact
      img={rama}
      name="Ewurama Amponsah"
      phone="+233 088945 309390"
      email="titi@gmail.com"
      
      />
      
      <Contact
        img={titi}
        name=" Multiti Bilal"
        phone="+233 088945 309390"
        email="titi@gmail.com"
/>
  <Contact
    img={sefakor}
    name="Sefakor Dodor"
    phone="+233 088945 309390"
    email="sefakor@gamil.com"
/>
  <Contact
    img={bertina}
    name="Bertina"
    phone="+233 088945 309390"
    email=" bertina@gmail.com"
/>
  
       
</div>
  )
   
}


export default App;
