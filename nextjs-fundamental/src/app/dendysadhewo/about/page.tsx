import React from "react";

const AboutPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', color: 'white', textAlign: 'center', padding: '1rem' }}>
    <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '2rem', borderRadius: '1rem', boxShadow: '0 0 20px rgba(0,0,0,0.5)', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>بِسْمِ اللهِ</h1>
      <p style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Saya Dendy Sadhewo, salah satu peserta Sandbox HSI di kelas Next.js</p>
      <p style={{ fontSize: '1.75rem' }}>Mohon bimbingannya 🙏</p>
    </div>
  </div>
);

export default AboutPage;
