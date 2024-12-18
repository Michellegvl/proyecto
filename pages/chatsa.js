import React, { useEffect, useState } from "react";
import { db, doc, getDoc, collection, addDoc, onSnapshot } from "../firebase"; // Fireabse
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
  const [currentView, setCurrentView] = useState("personalData"); // Manejar la vista actual
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    address: "",
    familyMembers: 0,
    physician: "",
  });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Dummy contacts
  const contacts = [
    { id: 1, name: "John Doe", occupation: "Doctor" },
    { id: 2, name: "Jane Smith", occupation: "Nurse" },
    { id: 3, name: "Michael Brown", occupation: "Family Member" },
  ];

  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchUserData(user.uid);
      }
    });
  }, []);

  const fetchUserData = async (uid) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      setUserData(userSnap.data());
    }
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;
    const messageData = { text: newMessage, sentByUser: true, timestamp: new Date() };
    setMessages([...messages, messageData]);
    setNewMessage("");
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: "20%", backgroundColor: "#f7f7f7", borderRight: "1px solid #ccc", padding: "20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>{userData.name}</h2>
        <button
          style={{
            marginBottom: "10px",
            backgroundColor: "#ddd",
            border: "none",
            padding: "10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
        <div>
          <h4>Personal data</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "5px 0", cursor: "pointer" }}>Full name</li>
            <li style={{ padding: "5px 0", cursor: "pointer" }}>Address</li>
            <li style={{ padding: "5px 0", cursor: "pointer" }}>Family</li>
            <li style={{ padding: "5px 0", cursor: "pointer" }}>Physician Associate</li>
          </ul>
          <h4>Medical Reports</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "5px 0", cursor: "pointer" }}>Reports</li>
          </ul>
          <h4>Emergency Contacts</h4>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ padding: "5px 0", cursor: "pointer" }}>Contacts</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#ffffff" }}>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <div style={{ flex: 1, textAlign: "center", border: "1px solid #ccc", padding: "20px", borderRadius: "10px" }}>
            <h3 style={{ marginBottom: "10px" }}>Lorem Ipsum</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum mauris ut diam.
            </p>
            <div
              style={{
                marginTop: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                backgroundColor: "#f7f7f7",
              }}
            >
              How can I help you?
            </div>
          </div>
        </div>

        {/* Chat */}
        <div style={{ display: "flex", height: "400px", border: "1px solid #ccc", borderRadius: "10px" }}>
          <aside
            style={{
              width: "30%",
              borderRight: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h4>Contacts</h4>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                style={{
                  padding: "10px",
                  marginBottom: "5px",
                  borderRadius: "5px",
                  backgroundColor: selectedContact?.id === contact.id ? "#ddd" : "#fff",
                  cursor: "pointer",
                }}
              >
                {contact.name}
              </div>
            ))}
          </aside>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#f9f9f9" }}>
            <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",
                    alignSelf: message.sentByUser ? "flex-end" : "flex-start",
                    backgroundColor: message.sentByUser ? "#e0ffe0" : "#ffe0e0",
                    borderRadius: "10px",
                    padding: "10px",
                    maxWidth: "70%",
                  }}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", padding: "10px", borderTop: "1px solid #ccc" }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                style={{ flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                placeholder="Write a message..."
              />
              <button
                onClick={handleSendMessage}
                style={{
                  marginLeft: "10px",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
