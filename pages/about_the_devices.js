import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Título */}
      <h1 style={{ textAlign: 'left', marginBottom: '20px', color: '#333' }}>About the devices</h1>
      
      {/* Contenedor principal dividido en dos columnas */}
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
        {/* Sección izquierda: texto */}
        <div style={{ flex: 1, paddingRight: '20px' }}>
  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    <strong>Promote Your Health Wearable:</strong>
  </p>
  
  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    Take control of your health with our innovative wearable app. Monitor your cardiac, pulmonary, and other vital functions with cutting-edge technology that provides you with personalized daily statistics.
  </p>

  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    <strong>Key Benefits:</strong>
  </p>

  <ul style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    <li>Continuous monitoring: Track your heart rate, breathing, and other vital signs throughout the day with accuracy.</li>
    <li>Personalized statistics: Receive detailed reports on your daily health, identifying patterns and areas for improvement.</li>
    <li>Prevention: Detect any anomalies or irregularities in real-time and take action before they become a problem.</li>
    <li>Convenience and accessibility: Access your health data directly from your smartphone, anytime and anywhere.</li>
  </ul>

  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    <strong>Why Choose Us?</strong>
  </p>

  <ul style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    <li>Advanced technology: We use state-of-the-art sensors to monitor your health precisely.</li>
    <li>Easy to use: No complicated equipment. Simply wear our device and connect your app to get started.</li>
    <li>Improve your quality of life: With constant monitoring, you’ll make more informed decisions about your well-being.</li>
  </ul>

  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    With our app, keep full control over your health and well-being in a simple and accessible way. <strong>Make prevention your best ally!</strong>
  </p>

  <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555', textAlign: 'justify' }}>
    This version highlights the main functions of the wearable (cardiac and pulmonary monitoring), the benefits of daily statistics, and how the technology makes it easy to track health in real-time. Focusing on prevention appeals to users who want to make informed decisions for their health.
  </p>
</div>


{/* Contenedor de imágenes */}
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px' }}>
  {/* Imagen 1 */}
  <div style={{ textAlign: 'center' }}>
    <img
      src="/aboutdevice-image.jpg" 
      alt="Cardiac Health Device"
      style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    />
  </div>

  {/* Imagen 2 */}
  <div style={{ textAlign: 'center' }}>
    <img
      src="/aboutdevice-image.jpg" 
      alt="Cardiac Health Device"
      style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
    />
  </div>
        </div>
        
      </div>

      {/* Botón debajo de las dos secciones */}
      <div style={{ textAlign: 'rigth' }}>
        <Link href="/about_us">
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
            Back to About us
          </button>
        </Link>
      </div>
    </div>
  );
}