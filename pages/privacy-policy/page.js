import styles from '/Privacy.module.css';
export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Política de Privacidad</h1>

      <div className={styles.content}>
        

        <h2 className={styles.h2Terminos}>1. Recopilación de Información</h2>
        <p className={styles.paragraph}>
          Recopilamos información personal y de uso cuando usted interactúa con nuestra aplicación, incluyendo pero no limitado a su nombre, dirección de correo electrónico, datos de salud y otros datos relevantes para el funcionamiento de la aplicación.
        </p>

        <h2 className={styles.h2Terminos}>2. Uso de la Información</h2>
        <p className={styles.paragraph}>
          Utilizamos la información recopilada para mejorar la experiencia del usuario, proporcionar servicios de salud personalizados, realizar análisis de datos y cumplir con las normativas legales aplicables.
        </p>

        <h2 className={styles.h2Terminos}>3. Protección de la Información</h2>
        <p className={styles.paragraph}>
          Implementamos medidas de seguridad técnicas y organizativas para proteger la información personal de accesos no autorizados, alteraciones o destrucción. Sin embargo, ninguna transmisión de datos por internet es completamente segura.
        </p>

        <h2 className={styles.h2Terminos}>4. Compartir la Información</h2>
        <p className={styles.paragraph}>
          No compartimos su información personal con terceros, salvo en los casos en que sea necesario para cumplir con nuestras obligaciones legales o proporcionar los servicios solicitados.
        </p>

        <h2 className={styles.h2Terminos}>5. Sus Derechos</h2>
        <p className={styles.paragraph}>
          Usted tiene derecho a acceder, corregir, o eliminar sus datos personales. Si desea ejercer estos derechos, por favor contáctenos a través de Senvit@gmail.com.
        </p>

        <h2 className={styles.h2Terminos}>6. Cambios en la Política de Privacidad</h2>
        <p className={styles.paragraph}>
          Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Las actualizaciones entrarán en vigor tan pronto como sean publicadas en esta página.
        </p>

        <h2 className={styles.h2Terminos}>7. Contacto</h2>
        <p className={styles.paragraph}>
          Si tiene preguntas o inquietudes sobre nuestra política de privacidad, por favor contáctenos a través de Senvit@gmail.com.
        </p>
      </div>

    </div>
  );
}
