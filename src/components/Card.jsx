import styles from "./Card.module.css";
function Card({data} ) {
  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardTitle} >Película Seleccionada</h2>
      <p className={styles.cardInfo}>
          <strong>Nombre:</strong> {data.movieName}</p>
      <p  className={styles.cardInfo}>
          <strong>Director:</strong> {data.directorName}</p>
  </div>
  );
}

export default Card;
