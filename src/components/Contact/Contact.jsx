import React, { useState } from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../../Context'; 
import { useContext } from "react";
import { Titre } from '../ui/Titre';
import SousTitre from '../ui/SousTitre';
const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done,setDone]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62a3e', 'template_7wfkzsc', form.current, {
        publicKey: 'vziB-pp4A1NeXvQe_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          
        },
      );
  };

  return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="awesone  c-awesone">
                <Titre titre='Contact moi'/> 
                <SousTitre titre="En un seul Click"/>
                <div className="blur c-blur1" sùtyle={{background:"#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-rightl">
              <form action="" ref={form} onSubmit={sendEmail}>
                <input type="text" className="user" name='user_name' placeholder='Nom' />
               <input type="email" className="user" name='user_name' placeholder='Email' />
               <textarea name="massage"  className="user"  placeholder='Message'></textarea>
               <input type="submit" className="button" value="Envoyer" />
               <span>{done && 'Merci de me contacter'}</span>
               <div className="blur c-blur2" style={{background:"var(--purple)"}}></div>
              </form>
        </div>
    </div>
  )
}

export default Contact
