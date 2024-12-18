export default function Chat({ params }) {
    const { contact } = params;
  
    return (
      <div style={{ padding: "20px" }}>
        <h1>Chat with {contact.charAt(0).toUpperCase() + contact.slice(1)}</h1>
        <p>Here you can chat with {contact}.</p>
      </div>
    );
  }