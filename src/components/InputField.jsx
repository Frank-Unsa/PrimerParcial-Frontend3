import styles from "./InputField.module.css";

function InputField({ label, value, onChange }) {
  return (
    <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>{label}</label>
        <input
            className={styles.inputField}
            type="text"
            value={value}
            onChange={onChange}
      />
    </div>
  );
}

export default InputField;