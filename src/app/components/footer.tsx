import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      textAlign: 'center', 
      padding: '20px 0', 
      backgroundColor: '#333', 
      color: '#fff', 
      position: 'absolute', 
      bottom: '0', 
      width: '100%', 
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <p style={{ margin: 0 }}>© 2024 My Next.js App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
