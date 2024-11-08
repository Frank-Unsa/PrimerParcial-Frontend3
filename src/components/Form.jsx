import { useState } from "react";
import InputField from "./InputField";
import styles from "./Form.module.css";
function Form({ onSubmit }) {
  const [movieName, setMovieName] = useState("");
  const [directorName, setDirectorName] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({ movieName, directorName });
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.formContainer}>
      <InputField
        label="Nombre de la película"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
      />
      <InputField
        label="Director de la película"
        value={directorName}
        onChange={(e) => setDirectorName(e.target.value)}
      />
      <button type="submit" className={styles.submitButton}>
        Enviar
      </button>
    </form>
  );
}

export default Form;