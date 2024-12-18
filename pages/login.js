import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../firebase";  // Importas el objeto auth que configuraste
                                                // sign Función de Firebase para login con email y password
import { useRouter } from "next/router";


export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // Estado para cambiar entre login y registro
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(""); // Mensajes de error
  const provider = new GoogleAuthProvider();// // Proveedor de Google ....
  const router = useRouter();  // Usamos el hook useRouter para redirigir
  const [loading, setLoading] = useState(false);

// Manejar el inicio de sesión con Google
const handleGoogleLogin = async () => {
  setLoading(true); // Establecer loading a true cuando comienza el proceso
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuario autenticado con Google:", user);
    alert("Inicio de sesión exitoso con Google");
     // Redirigir al usuario a la página "home" después de un login exitoso

     if (auth.currentUser) {
      await router.push("/home");
    } else {
      setError("Autenticación fallida. Intenta nuevamente.");
    }
    
  } catch (error) {
    console.error("Error al iniciar sesión con Google:", error.message);
    setError("Error al iniciar sesión con Google. Intenta nuevamente.");
  }
};
  // Validación del correo
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  // Validación de la contraseña
  const validatePassword = (password) => {
    // Debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial
    const minLength = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasUpperCase && hasNumber && hasSpecialChar;
  };

  // Manejar el inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login exitoso");
      router.push('/home'); 
    } catch (error) {
      setError("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  // Manejar el registro
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Por favor, llena todos los campos.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }
    if (!validatePassword(password)) {
      setError("La contraseña debe tener al menos 6 caracteres, una mayúscula, un número y un carácter especial.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Cuenta creada exitosamente");
    } catch (error) {
      setError("Error al crear la cuenta. Intenta nuevamente.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url('/lock-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.6)",
        }}
      ></div>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "100%",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "28px",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          {isLogin ? "Iniciar sesión" : "Crear cuenta"}
        </h1>

        {/* Formulario */}
        <form>
          {!isLogin && (
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="name"
                style={{ fontSize: "18px", color: "#333", display: "block", marginBottom: "5px" }}
              >
                Nombre completo:
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  boxSizing: "border-box",
                }}
              />
            </div>
          )}
          <div style={{ marginBottom: "20px" }}>
            <label
              htmlFor="email"
              style={{ fontSize: "18px", color: "#333", display: "block", marginBottom: "5px" }}
            >
              Correo electrónico:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label
              htmlFor="password"
              style={{ fontSize: "18px", color: "#333", display: "block", marginBottom: "5px" }}
            >
              Contraseña:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>

          <button
            type="submit"
            onClick={isLogin ? handleLogin : handleRegister}
            style={{
              width: "100%",
              padding: "14px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            {isLogin ? "Iniciar sesión" : "Crear cuenta"}
          </button>
        </form>

        {/* Mostrar mensajes de error */}
        {error && (
          <div style={{ marginTop: "20px", color: "red", fontSize: "16px", textAlign: "center" }}>
            <p>{error}</p>
          </div>
        )}
<form>
          {/* Formulario de inicio de sesión o registro */}
          {/* El botón para Google ya está añadido */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                backgroundColor: "#db4437",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "18px",
                cursor: "pointer",
                padding: "14px",
              }}
              >
              <img
              src="/google-icon.svg"
              alt="Google"
              style={{
                width: "20px",
                marginRight: "8px",  // Espacio entre el icono y el texto
                transition: "transform 3.3s ease",  // Añadir transición suave en el SVG
                transform: loading ? "rotate(360deg)" : "none", // Mover el SVG solo si está cargando
              }}
            />
            {loading ? "Cargando..." : "Iniciar sesión con Google"}
    
            </button>
          </div>
        </form>

        {/* Enlace para cambiar entre login y registro */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="#"
            onClick={() => setIsLogin(!isLogin)}
            style={{
              fontSize: "16px",
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Inicia sesión"}
          </a>
        </div>

        {/* Enlace de "Olvidé mi contraseña" */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href="/forgot_password"
            style={{
              fontSize: "16px",
              color: "#007bff",
              textDecoration: "none",
            }}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}
