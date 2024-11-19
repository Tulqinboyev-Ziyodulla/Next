import Link from 'next/link';

const Home: React.FC = () => {
  return (
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
      <h1
        style={{
          fontSize: '40px',
          color: '#333',
          marginBottom: '20px',
        }}
      >
        Next.js loyihasiga xush kelibsiz!
      </h1>
      <p
        style={{
          fontSize: '20px',
          color: '#555',
          lineHeight: '1.6',
          marginBottom: '30px',
        }}
      >
        Bu oddiy Next.js loyihasi!
      </p>
      <Link href="/about">
        <button
          style={{
            padding: '12px 25px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Haqida sahifasiga o'tish
        </button>
      </Link>
    </div>
  );
};

export default Home;
