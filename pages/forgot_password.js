import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useRouter } from 'next/router';
import styles from '../styles/ForgotPassword.module.css'; // Asegúrate de tener el archivo de estilos

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Te hemos enviado un correo para restablecer tu contraseña.');
      setEmail('');
      setError('');
    } catch (error) {
      setSuccess('');
      if (error.code === 'auth/invalid-email') {
        setError('Por favor ingresa un correo válido.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No encontramos un usuario con ese correo.');
      } else {
        setError('Ocurrió un error, intenta de nuevo.');
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {/* Utiliza la clase local 'title' en lugar de h2 */}
        <h2 className={styles.title}>Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo"
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <button type="submit" className={styles.submitButton}>
            Enviar Correo de Restablecimiento
          </button>
        </form>
        <p className={styles.backToLogin} onClick={() => router.push('/login')}>
          Volver al Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;