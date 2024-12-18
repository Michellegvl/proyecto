import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Título */}
      <h1 style={{ textAlign: 'left', marginBottom: '20px', color: '#333' }}>About Us</h1>
      
      {/* Contenedor principal dividido en dos columnas */}
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
        {/* Sección izquierda: texto */}
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
            Our mission is to revolutionize healthcare through innovative technology. 
            We are developing advanced devices for cardiac health monitoring, ensuring better care and prevention for everyone.
          </p>
        </div>

        {/* imagen */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <img
            src="/device-image.jpg" 
            alt="Cardiac Health Device"
            style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
        </div>
      </div>

      {/* Botón debajo de las dos secciones */}
      <div style={{ textAlign: 'center' }}>
        <Link href="/about_the_devices">
          <button
            style={{
              backgroundColor: '#ccf7fe', // 
              color: 'black',
              border: '2px solid #f7931e',
              padding: '10px 20px',
              fontSize: '16px',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#f7931e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#f7931e';
              e.target.style.color = 'white';
            }}
          >
            Get to know the devices used
          </button>
        </Link>
      </div>
    </div>
  );
}