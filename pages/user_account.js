import React, { useEffect, useState } from "react";
import { db, doc, getDoc, setDoc } from "../firebase"; // Firestore
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function UserAccount() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    familyMembers: 0,
    physician: "",
    profileImage: "", // Para almacenar la imagen en Base64
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [profileImageFile, setProfileImageFile] = useState(null); // Para manejar el archivo de imagen

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchUserData(user.uid);
      } else {
        console.log("No user is logged in.");
      }
    });
  }, []);

  // Cargar datos del usuario desde Firestore
  const fetchUserData = async (uid) => {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      setUserData(userSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  // Función para manejar el cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageFile(reader.result); // Guardamos la imagen convertida a Base64
      };
      reader.readAsDataURL(file); // Convertir la imagen a Base64
    }
  };

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Guardar los datos del usuario en Firestore
  const handleSave = async () => {
    setIsSaving(true);
    if (profileImageFile) {
      // Si hay una imagen nueva, la añadimos a los datos del usuario
      await setDoc(doc(db, "users", userId), {
        ...userData,
        profileImage: profileImageFile, // Guardamos la imagen en Base64
      });
      setUserData((prevData) => ({
        ...prevData,
        profileImage: profileImageFile, // Actualizamos el estado con la imagen
      }));
    } else {
      // Si no hay imagen nueva, solo guardamos los otros datos
      await setDoc(doc(db, "users", userId), userData);
    }

    setIsSaving(false);
    setIsEditing(false); // Salir del modo edición
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial, sans-serif" }}>
      <aside style={{ width: "25%", backgroundColor: "#f7f7f7", padding: "20px", borderRight: "1px solid #ccc" }}>
        <div style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "5px" }}>Usuario</h2>
          <button
            style={{
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: "#fff",
              cursor: "pointer",
            }}
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancelar" : "Editar"}
          </button>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Personal Data</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ marginBottom: "5px" }}>
              Full Name: {isEditing ? <input type="text" name="name" value={userData.name} onChange={handleChange} /> : userData.name}
            </li>
            <li style={{ marginBottom: "5px" }}>
              Address: {isEditing ? <input type="text" name="address" value={userData.address} onChange={handleChange} /> : userData.address}
            </li>
            <li style={{ marginBottom: "5px" }}>
              Family: {isEditing ? <input type="number" name="familyMembers" value={userData.familyMembers} onChange={handleChange} /> : userData.familyMembers}
            </li>
            <li style={{ marginBottom: "5px" }}>
              Physician Associate: {isEditing ? <input type="text" name="physician" value={userData.physician} onChange={handleChange} /> : userData.physician}
            </li>
          </ul>
        </div>
        {isEditing && (
          <button
            style={{
              display: "block",
              marginBottom: "10px",
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        )}
      </aside>

      {/* Contenido derecho */}
      <main style={{ flex: 1, textAlign: "center", padding: "20px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Welcome, {userData.name || "User"}!</h1>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>Manage your personal information</p>

        {/* Área de imagen de perfil */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}  // Ocultar el input de archivo
            id="profileImageInput"
          />
          <label htmlFor="profileImageInput">
            <div
              style={{
                width: "250px",
                height: "250px",
                backgroundColor: "#f0f0f0",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                margin: "0 auto",
              }}
            >
              {userData.profileImage ? (
                <img
                  src={userData.profileImage}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <span style={{ color: "#007bff", fontSize: "16px" }}>Upload Profile Picture</span>
              )}
            </div>
          </label>
        </div>
      </main>
    </div>
  );
}
