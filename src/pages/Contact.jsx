// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/contact.css';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h1 className="title">Contacto</h1>
      <p>Si buscas un desarrollador entusiasta y altamente competente, no dudes en contactarme.</p>
      <ContactForm />
    </section>
  );
}

export default Contact;
