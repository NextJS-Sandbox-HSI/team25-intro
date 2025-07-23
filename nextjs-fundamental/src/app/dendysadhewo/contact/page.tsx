import React from "react";
import { Linkedin, Github } from "lucide-react";

const ContactPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', color: 'white', textAlign: 'center', padding: '1rem' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Hubungi Saya</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <a
        href="https://www.linkedin.com/in/dendy-sadhewo/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.75rem', color: 'white', textDecoration: 'none' }}
      >
        <Linkedin size={48} />
        <span>Dendy Sadhewo</span>
      </a>
      <a
        href="https://github.com/dendysadhewo"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.75rem', color: 'white', textDecoration: 'none' }}
      >
        <Github size={48} />
        <span>dendysadhewo</span>
      </a>
    </div>
  </div>
);

export default ContactPage;
