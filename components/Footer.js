import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';  // Importa Link de next/link

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        padding: "20px 0",
        position: "relative",
        bottom: "0",
        width: "100%",
        textAlign: "center",
      }}
    >
      {/* Listas paralelas */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "0 auto",
        }}
      >
        {/* Primera columna */}
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "16px" }}>Quick Links</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0, color: "#555" }}>
            <li>
              <Link href="/" style={{ textDecoration: "none", color: "#555" }}>index</Link>
            </li>
            <li>
              <Link href="/about" style={{ textDecoration: "none", color: "#555" }}>About_us</Link>
            </li>
            <li>
              <Link href="/features" style={{ textDecoration: "none", color: "#555" }}>Features</Link>
            </li>
            <li>
              <Link href="/pricing" style={{ textDecoration: "none", color: "#555" }}>Pricing</Link>
            </li>
            <li>
              <Link href="/contact" style={{ textDecoration: "none", color: "#555" }}>Contact_Us</Link>
            </li>
          </ul>
        </div>

        {/* Segunda columna */}
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "16px" }}>Resources</h4>
          <ul style={{ listStyleType: "none", padding: 0, margin: 0, color: "#555" }}>
            <li>
              <Link href="https://www.blogger.com/about/?bpli=1" style={{ textDecoration: "none", color: "#555" }}>Blog</Link>
            </li>
            <li>
              <Link href="" style={{ textDecoration: "none", color: "#555" }}>Search</Link>
            </li>
            <li>
              <Link href="/FAQ" style={{ textDecoration: "none", color: "#555" }}>FAQ</Link>
            </li>
            <li>
              <Link href="/privacy" style={{ textDecoration: "none", color: "#555" }}>Privacy</Link>
            </li>
            <li>
              <Link href="/community" style={{ textDecoration: "none", color: "#555" }}>Community</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Suscripción al boletín */}
      <div style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "16px", color: "#333" }}>Get our Newsletter</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginRight: "10px",
              width: "250px",
              outline: "none",
            }}
          />
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Iconos de redes sociales */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="#007bff" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#007bff" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} color="#007bff" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={24} color="#007bff" />
        </a>
      </div>
    </div>
  );
}
