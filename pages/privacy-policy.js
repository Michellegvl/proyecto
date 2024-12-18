export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Roboto', Arial, sans-serif", color: '#333', lineHeight: '1.8', padding: '20px' }}>
      {/* Header */}
      <h1 style={{ textAlign: 'center', color: '#0073e6', fontSize: '2rem', marginBottom: '10px' }}>
        Privacy Policy
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1rem', marginBottom: '20px', color: '#555' }}>
        Last updated: December 14, 2024
      </p>

      {/* Table of Contents */}
      <nav style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.2rem', color: '#0073e6' }}>Contents</h2>
        <ul style={{ listStyleType: 'none', padding: 0, lineHeight: '2' }}>
          <li><a href="#collection" style={{ color: '#0073e6', textDecoration: 'none' }}>1. Information Collection</a></li>
          <li><a href="#usage" style={{ color: '#0073e6', textDecoration: 'none' }}>2. Use of Information</a></li>
          <li><a href="#protection" style={{ color: '#0073e6', textDecoration: 'none' }}>3. Information Protection</a></li>
          <li><a href="#sharing" style={{ color: '#0073e6', textDecoration: 'none' }}>4. Information Sharing</a></li>
          <li><a href="#rights" style={{ color: '#0073e6', textDecoration: 'none' }}>5. Your Rights</a></li>
          <li><a href="#changes" style={{ color: '#0073e6', textDecoration: 'none' }}>6. Privacy Policy Updates</a></li>
          <li><a href="#contact" style={{ color: '#0073e6', textDecoration: 'none' }}>7. Contact</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="collection" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>1. Information Collection</h2>
        <p>
          We collect the following types of information:
        </p>
        <ul>
          <li><strong>Personal Information:</strong> Your name, email address, phone number, and any other details you provide when creating an account.</li>
          <li><strong>Health Data:</strong> Information such as heart rate, blood pressure, glucose levels, and oxygen saturation if provided by connected devices or manually entered.</li>
          <li><strong>Usage Data:</strong> Information about how you use our app, including activity logs, preferences, and interaction patterns.</li>
        </ul>
        <p>
          This data is gathered directly from you, through wearable devices, or via analytics tools used to improve the app's performance.
        </p>
      </section>

      <section id="usage" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>2. Use of Information</h2>
        <p>
          The information we collect is used for the following purposes:
        </p>
        <ul>
          <li><strong>Enhancing Your Experience:</strong> Personalizing the app to display your health data in a user-friendly format and tailoring recommendations to your needs.</li>
          <li><strong>Health Monitoring:</strong> Providing real-time insights into your health metrics and trends to promote better well-being.</li>
          <li><strong>Compliance:</strong> Ensuring that we adhere to legal and regulatory obligations regarding health data management.</li>
        </ul>
      </section>

      <section id="protection" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>3. Information Protection</h2>
        <p>
          We implement the following measures to safeguard your data:
        </p>
        <ul>
          <li><strong>Encryption:</strong> All personal and health data is encrypted during transmission and storage to prevent unauthorized access.</li>
          <li><strong>Access Controls:</strong> Only authorized personnel with a need-to-know basis can access your data.</li>
          <li><strong>Regular Audits:</strong> We conduct regular security audits to identify and address vulnerabilities.</li>
        </ul>
        <p>
          While we strive to protect your information, please note that no system is completely secure. We encourage you to use strong passwords and to keep your account details private.
        </p>
      </section>

      <section id="sharing" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>4. Information Sharing</h2>
        <p>
          We do not sell your personal data. However, your data may be shared in the following circumstances:
        </p>
        <ul>
          <li><strong>With Your Consent:</strong> If you provide explicit permission, we may share data with healthcare providers or other third parties.</li>
          <li><strong>Legal Compliance:</strong> If required by law or to protect our legal rights, we may disclose your information.</li>
          <li><strong>Service Providers:</strong> We may share your data with trusted partners who help us operate our app, subject to confidentiality agreements.</li>
        </ul>
      </section>

      <section id="rights" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>5. Your Rights</h2>
        <p>
          You have the following rights regarding your personal data:
        </p>
        <ul>
          <li><strong>Access:</strong> Request a copy of the information we hold about you.</li>
          <li><strong>Correction:</strong> Update inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request the removal of your data, subject to legal requirements.</li>
          <li><strong>Data Portability:</strong> Receive a digital copy of your data for use elsewhere.</li>
        </ul>
        <p>
          To exercise these rights, contact us at
          <a href="mailto:Senvit@gmail.com" style={{ color: '#0073e6', textDecoration: 'none' }}> Senvit@gmail.com</a>.
        </p>
      </section>

      <section id="changes" style={{ marginTop: '20px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>6. Privacy Policy Updates</h2>
        <p>
          We reserve the right to update this policy as needed. If we make significant changes, we will notify you via email or an app notification.
        </p>
      </section>

      <section id="contact" style={{ marginTop: '20px', marginBottom: '40px' }}>
        <h2 style={{ color: '#0073e6', fontSize: '1.5rem' }}>7. Contact</h2>
        <p>
          For questions, concerns, or to exercise your rights, please contact us at
          <a href="mailto:Senvit@gmail.com" style={{ color: '#0073e6', textDecoration: 'none' }}> Senvit@gmail.com</a>.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginTop: '20px' }}>
        © 2024 Senvit Health Solutions. All rights reserved.
      </footer>
    </div>
  );
}
