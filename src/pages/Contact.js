import React from 'react';
import './../assets/styles/contact.css';

function Contact() {
  return (
    <div>
     <div className="container">
       <h1>Contact Me</h1>
       <p>
         <a href="mailto:tamira.bell@gmail.com">
           <i className="fas fa-envelope icon"> tamira.bell@gmail.com</i>
          </a>
       </p>

       <p>
         <a href="https://www.linkedin.com/in/tamira-bell" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin icon"> LinkedIn</i>
         </a>
       </p>

       <p>
         <a href="https://github.com/tbell-woG" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github icon"> GitHub</i>
         </a>
       </p>

       <p>
         <a href="tel:2677138792" target="_blank" rel="noopener noreferrer">
           <i className="call-button">Click to Call</i>
         </a>
       </p>

     </div>
    </div>
    
  );  
}

export default Contact;