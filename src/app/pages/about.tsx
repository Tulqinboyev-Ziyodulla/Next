import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ fontSize: '36px', color: '#333' }}>Bu Haqida sahifasi</h1>
      <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
        Next.js haqida o‘rganishni davom eting!
      </p>
      <Link href="/">
        <button
          style={{
            padding: '12px 25px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Bosh sahifaga qaytish
        </button>
      </Link>
    </div>
  );
};

export default About;
