import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Asegúrate de tener la configuración correcta de Firestore
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function EmergencyContacts() {
  const [userData, setUserData] = useState(null); // Para almacenar los datos del usuario
  const [contacts, setContacts] = useState([
    { id: 1, name: "John Doe", occupation: "Doctor" },
    { id: 2, name: "Jane Smith", occupation: "Nurse" },
    { id: 3, name: "Michael Brown", occupation: "Family Member" },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Función para cargar los datos del usuario desde Firestore
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log("No such user document!");
        }
      }
    });
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, sentByUser: true }]);
    setNewMessage("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Menú lateral izquierdo */}
      <aside style={{ width: "25%", backgroundColor: "#f7f7f7", padding: "20px", borderRight: "1px solid #ccc" }}>
        <div style={{ marginBottom: "30px" }}>
          {/* Mostrar los datos del usuario desde Firestore */}
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>
            {userData ? userData.name : "Loading..."}
          </h2>
          {userData && userData.profileImage && (
            <img
              src={userData.profileImage}
              alt="Profile"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            />
          )}
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
          >
            LOGO
          </button>
        </div>
        {contacts.map((contact) => (
          <button
            key={contact.id}
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px 15px",
              backgroundColor: selectedContact?.id === contact.id ? "#007bff" : "#f7f7f7",
              color: selectedContact?.id === contact.id ? "white" : "black",
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              textAlign: "left",
            }}
            onClick={() => setSelectedContact(contact)}
          >
            {contact.name} - {contact.occupation}
          </button>
        ))}
      </aside>

      {/* Contenido derecho */}
      <main style={{ flex: 1, padding: "20px" }}>
        {selectedContact ? (
          <>
            <header style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
              <h2 style={{ fontSize: "20px" }}>{selectedContact.name}</h2>
              <p style={{ color: "#555" }}>{selectedContact.occupation}</p>
            </header>
            <div
              style={{
                flex: 1,
                overflowY: "auto",
                maxHeight: "calc(100vh - 200px)",
                border: "1px solid #ccc",
                borderRadius: "5px",
                padding: "10px",
                marginBottom: "20px",
              }}
            >
              {messages.length === 0 ? (
                <p style={{ color: "#777", textAlign: "center" }}>No messages yet.</p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    style={{
                      textAlign: msg.sentByUser ? "right" : "left",
                      marginBottom: "10px",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        padding: "10px",
                        borderRadius: "10px",
                        backgroundColor: msg.sentByUser ? "#007bff" : "#f1f1f1",
                        color: msg.sentByUser ? "white" : "black",
                        maxWidth: "60%",
                        wordWrap: "break-word",
                      }}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))
              )}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Write a message..."
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
              <button
                onClick={handleSendMessage}
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <h1 style={{ textAlign: "center", color: "#555" }}>Select a contact to start chatting</h1>
        )}
      </main>
    </div>
  );
}
