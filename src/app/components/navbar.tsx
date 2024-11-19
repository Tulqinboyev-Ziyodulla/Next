import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#fff', fontSize: '20px', fontWeight: '600' }}>My Website</div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '24px' }}>
            <Link href="/" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
              Home
            </Link>
          </li>
          <li style={{ marginRight: '24px' }}>
            <Link href="/about" style={{ color: '#fff', textDecoration: 'none', fontSize: '16px' }}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
