import React from 'react';
import Layout from '../layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div
        style={{
          textAlign: 'center',
          marginTop: '100px',
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#f4f4f4',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '40px', color: '#333', marginBottom: '20px' }}>
          Welcome to My Next.js App!
        </h1>
        <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.6' }}>
          This is the home page.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
