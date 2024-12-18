import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import { useState, useEffect } from 'react';
import { auth, signOut } from '../firebase'; // Ajusta estas importaciones según tu configuración

const Navbar = () => {
  const [user, setUser] = useState(null); // Estado del usuario
  const [darkMode, setDarkMode] = useState(false); // Estado del tema

  // Verificar el estado de autenticación del usuario
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Recuperar el tema guardado al montar el componente
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setDarkMode(savedTheme === 'dark');
      }
    }
  }, []);

  // Aplicar el tema cuando cambie el estado de darkMode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [darkMode]);

  // Alternar tema
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  // Función para cerrar sesión
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Sesión cerrada correctamente");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        <img src="/logo.png" alt="Company Logo" />
      </Link>

      {/* Menú de navegación */}
      <ul className={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about_us">About</Link></li>
        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
        {user && <li><Link href="/check-your-data">Check Your Data</Link></li>}
        <li><Link href="/news">News</Link></li>
        <li><Link href="/contact_us">Contact Us</Link></li>
      </ul>

      {/* Botones a la derecha */}
      <div className={styles.rightSection}>
        <Link href="/contact-us" className={styles.contactButton}>Contact us</Link>

        {user ? (
          <div className={styles.userSection}>
            <div className={styles.userIcon}>
            <a href="/user_account" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img
             src="/user-icon.png"
           alt="User"
             style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
             <span style={{ fontSize: "12px", marginLeft: "8px" }}>Account</span>
            </a>
            </div>
            <button onClick={handleSignOut} className={styles.signOutButton}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.userIcon}>
            <Link href="/login">
              <div style={{ cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src="/user-icon.png"
                  alt="Login"
                  style={{ height: "30px", width: "30px", borderRadius: "50%" }}
                />
                <span style={{ fontSize: "12px" }}>Login</span>
              </div>
            </Link>
          </div>
        )}

        {/* Botón de cambio de tema */}
        <button
          onClick={toggleDarkMode}
          className={styles.themeToggle}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
