import styles from "./Input.module.css";

const Input = ({ type, placeholder, id, name, value, onChange, label }) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputTitle} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        className={`${styles.input} body-medium-regular`}
        placeholder={placeholder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
