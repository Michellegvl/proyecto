import React, { useState } from "react";

export default function FAQPage() {
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Estado para rastrear la pregunta seleccionada

  const faqs = [
    {
      id: 1,
      question: "¿Cómo puedo crear una cuenta?",
      answer: "Para crear una cuenta, haz clic en el botón 'Registrarse' en la parte superior derecha y sigue las instrucciones.",
    },
    {
      id: 2,
      question: "¿Cómo puedo restablecer mi contraseña?",
      answer: "Ve a la página de inicio de sesión y selecciona 'Olvidé mi contraseña'. Recibirás un correo con instrucciones.",
    },
    {
      id: 3,
      question: "¿Dónde puedo encontrar soporte técnico?",
      answer: "Visita la sección 'Soporte' en el menú principal para contactar a nuestro equipo.",
    },
    {
      id: 4,
      question: "¿Puedo actualizar mi información personal?",
      answer: "Sí, dirígete a la sección 'Mi perfil' y edita la información que desees actualizar.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ fontSize: "24px", textAlign: "center", marginBottom: "20px" }}>Preguntas Frecuentes</h1>
      <div style={{ marginBottom: "20px", border: "1px solid #ccc", borderRadius: "5px", overflow: "hidden" }}>
        {/* Lista desplegable */}
        {faqs.map((faq) => (
          <button
            key={faq.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "10px 15px",
              backgroundColor: selectedQuestion === faq.id ? "#007bff" : "#f9f9f9",
              color: selectedQuestion === faq.id ? "white" : "black",
              border: "none",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
              outline: "none",
            }}
            onClick={() => setSelectedQuestion(selectedQuestion === faq.id ? null : faq.id)} // Alternar pregunta seleccionada
          >
            {faq.question}
            <span style={{ transform: selectedQuestion === faq.id ? "rotate(90deg)" : "rotate(0)", transition: "0.3s" }}>
              ➤
            </span>
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      {selectedQuestion && (
        <div style={{ padding: "15px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
          <p style={{ fontSize: "16px" }}>
            {faqs.find((faq) => faq.id === selectedQuestion).answer}
          </p>
        </div>
      )}
    </div>
  );
}
