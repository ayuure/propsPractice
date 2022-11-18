import React from 'react';
import './App.css';
import Contact from './Contact';
import rama from './images/ama.jpg'


function App() {
  return (
    <div>
      <Contact
      img={"./images/ama.jpg"}
      name="Ewurama Amponsah"
      phone="+233 088945 309390"
      email="titi@gmail.com"
      
      />
      
      <Contact
img="../images/ama.jpg"
name=" Multiti Bilal"
phone="+233 088945 309390"
email="titi@gmail.com"
/>
<Contact
img="./images/sefakor.jpg"
name="Sefakor Dodor"
phone="+233 088945 309390"
email="sefakor@gamil.com"
/>
<Contact
img="./images/bertina.jpg"
name="Bertina"
phone="+233 088945 309390"
email=" bertina@gmail.com"
/>
  
       
        </div>
  )
   
}


export default App;
