import styles from "./Input.module.css";

const Input = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
  label,
  readOnly,
  icon,
  onClick,
}) => {
  return (
    <div className={styles.inputBox}>
      <label className={styles.inputTitle} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input
          type={type}
          className={`${styles.input} body-medium-regular`}
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly ? true : false}
        />
        {icon && (
          <button className={styles.iconButton} onClick={onClick}>
            <img src={icon} alt="" className={styles.icon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
