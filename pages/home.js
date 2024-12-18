import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css'; // archivo de estilos
import { useRouter } from 'next/router';
import { auth } from '../firebase'; // solo importamos lo necesario para la autenticación
import { onAuthStateChanged } from 'firebase/auth'; // Importa el listener de cambios en el estado de autenticación
const home = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true); // Añadimos un estado para manejar la carga
  
    useEffect(() => {
        // Escuchamos los cambios en el estado de autenticación
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (!user) {
            router.push("/login"); // Si no hay usuario, redirige a login
          } else {
            setLoading(false); // Si hay usuario, dejamos de mostrar la pantalla de carga
          }
        });
    
        // Limpiamos el listener cuando el componente se desmonte
        return () => unsubscribe();
      }, [router]);
    
      // Mientras estamos verificando la autenticación, mostramos un indicador de carga
      if (loading) {
        return <div>Loading...</div>; // Puedes poner aquí un spinner o un mensaje de carga
      }

  // Si está autenticado, renderizamos el contenido de la página de inicio
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What is SenVit?</h1>
      <div className={styles.videoContainer}>
        <iframe
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Cambia la URL del video a la que necesites
          title="SenVit Video"
          style={{ border: "none" }} 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default home;
