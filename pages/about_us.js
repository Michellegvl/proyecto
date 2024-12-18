import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div style={{ fontFamily: "'Roboto', Arial, sans-serif", color: '#333', padding: '20px' }}>
      {/* Header Section */}
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0073e6', marginBottom: '10px' }}>About Us</h1>
        <p style={{ fontSize: '1rem', color: '#555', maxWidth: '700px', margin: '0 auto' }}>
          At Senvit Health Solutions, we are dedicated to enhancing lives through innovative healthcare technology.
          Learn more about our mission, our devices, and the impact we aim to create in the world of cardiac health.
        </p>
      </header>

      {/* Main Content Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
        {/* Left Section: Mission Statement */}
        <div style={{ flex: '1 1 50%', padding: '20px', minWidth: '300px' }}>
          <h2 style={{ fontSize: '1.8rem', color: '#0073e6', marginBottom: '10px' }}>Our Mission</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            Our mission is to revolutionize healthcare through state-of-the-art wearable technology that empowers
            individuals to take control of their health. We strive to create accessible, accurate, and reliable
            devices that monitor cardiac health, blood pressure, glucose levels, and more, ensuring better care and
            prevention for everyone.
          </p>
        </div>

        {/* Right Section: Image */}
        <div style={{ flex: '1 1 50%', textAlign: 'center', minWidth: '300px' }}>
          <img
            src="/device-image.jpg"
            alt="Cardiac Health Device"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
            }}
          />
        </div>
      </div>

      {/* Team Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0073e6', marginBottom: '20px' }}>Meet Our Team</h2>
        <p style={{ fontSize: '1rem', color: '#555', maxWidth: '700px', margin: '0 auto', marginBottom: '30px' }}>
          Behind every innovation is a team of passionate individuals. Meet the dedicated members of Senvit Health Solutions.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {/* Team Members */}
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5xQUCX-OdP8WOn4eg2pkG5twmb2HdJyHmjw&s"
              alt="Michelle Guadalupe Villagómez López"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginBottom: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Michelle Guadalupe Villagómez López</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Chief Operations Officer</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img
              src="https://dthezntil550i.cloudfront.net/gb/latest/gb2210292052002150018530802/1280_960/f5e8a7a9-b334-4bb9-a4da-6708419fd9ef.png"
              alt="Juárez Rivera Juan Alberto"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginBottom: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Juárez Rivera Juan Alberto</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Chief Technical Officer</p>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '200px' }}>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75565f73-07bb-4d11-bb37-736482fd9a54/dc9w1hz-16648df9-2800-4031-adaf-c50fccad3c3f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1NTY1ZjczLTA3YmItNGQxMS1iYjM3LTczNjQ4MmZkOWE1NFwvZGM5dzFoei0xNjY0OGRmOS0yODAwLTQwMzEtYWRhZi1jNTBmY2NhZDNjM2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dFXrPKWcP4VgQ-Z2-E5nPYRf_-L4k6lPeuFC3b4Q5qY"
              alt="Alan Eduardo Guevara Hernandez"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                marginBottom: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
            <h3 style={{ fontSize: '1.2rem', color: '#333', marginBottom: '5px' }}>Alan Eduardo Guevara Hernandez</h3>
            <p style={{ fontSize: '0.9rem', color: '#555' }}>Chief Innovation Officer</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0073e6', marginBottom: '20px' }}>Discover More</h2>
        <p style={{ fontSize: '1rem', color: '#555', maxWidth: '700px', margin: '0 auto', marginBottom: '30px' }}>
          Want to learn more about the devices we use and how they can improve your health? Click below to explore
          the cutting-edge technology behind our solutions.
        </p>
        <Link href="/about_the_devices">
          <button
            style={{
              backgroundColor: '#0073e6',
              color: '#fff',
              border: 'none',
              padding: '12px 30px',
              fontSize: '1rem',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#005bb5';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#0073e6';
            }}
          >
            Learn More About Our Devices
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#555', fontSize: '0.9rem' }}>
        <p>© 2024 Senvit Health Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}
