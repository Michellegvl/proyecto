import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa"; // Usando react-icons para los iconos

export default function ContactUs() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>Contact Us</h1>
      <p style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
        We are here to help! Feel free to reach out to us through any of the following platforms.
      </p>

      {/* Redes Sociales */}
      <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "30px" }}>
        {/* Facebook */}
        <a
          href="https://facebook.com/Sentvit"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            width: "80px",
            height: "80px",
            backgroundColor: "#3b5998", // Color de Facebook
            borderRadius: "50%",
            color: "white",
            fontSize: "48px", // Aumentamos el tamaño del icono
            lineHeight: "80px", // Centrado del icono
            textDecoration: "none",
          }}
        >
          <FaFacebook />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/Sentvit"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            width: "80px",
            height: "80px",
            backgroundColor: "#E4405F", // Color de Instagram
            borderRadius: "50%",
            color: "white",
            fontSize: "48px", // Aumentamos el tamaño del icono
            lineHeight: "80px", // Centrado del icono
            textDecoration: "none",
          }}
        >
          <FaInstagram />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/Sentvit"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            width: "80px",
            height: "80px",
            backgroundColor: "#1DA1F2", // Color de Twitter
            borderRadius: "50%",
            color: "white",
            fontSize: "48px", // Aumentamos el tamaño del icono
            lineHeight: "80px", // Centrado del icono
            textDecoration: "none",
          }}
        >
          <FaTwitter />
        </a>

        {/* Email */}
        <a
          href="mailto:support@sentvit.com"
          style={{
            display: "block",
            textAlign: "center",
            width: "80px",
            height: "80px",
            backgroundColor: "#D44638", // Color de Email (rojo)
            borderRadius: "50%",
            color: "white",
            fontSize: "48px", // Aumentamos el tamaño del icono
            lineHeight: "80px", // Centrado del icono
            textDecoration: "none",
          }}
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Mensaje adicional */}
      <p style={{ fontSize: "20px", fontWeight: "bold", color: "#555", marginTop: "20px" }}>
        Our team is ready to assist you with any questions you may have. We look forward to hearing from you!
      </p>
    </div>
  );
}
