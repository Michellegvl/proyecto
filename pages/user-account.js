export default function UserAccount() {
    const contacts = [
      { id: 1, name: "John Doe", occupation: "Doctor", chatLink: "/chat/john" },
    ];
    
    return (
      <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
        {/* Menú lateral izquierdo */}
        <aside style={{ width: "25%", backgroundColor: "#f7f7f7", padding: "20px", borderRight: "1px solid #ccc" }}>
          <div style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>Juan Pérez</h2>
            <button style={{ padding: "5px 10px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#fff", cursor: "pointer" }}>
              LOGO
            </button>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Personal Data</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "5px" }}>Full Name: </li>
              <li style={{ marginBottom: "5px" }}>Address: </li>
              <li style={{ marginBottom: "5px" }}>Family: </li>
              <li style={{ marginBottom: "5px" }}>Physician Associate: </li>
            </ul>
          </div>
          <button style={{ display: "block", marginBottom: "10px", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Medical Reports
          </button>
          <button style={{ display: "block", marginBottom: "10px", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Emergency Contacts
          </button>
          <button style={{ display: "block", padding: "10px 15px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Edit Information
          </button>
        </aside>
  
        {/* Contenido derecho */}
        <main style={{ flex: 1, padding: "20px" }}>
         
        
        </main>
      </div>
    );
  }
  