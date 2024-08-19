import styles from "./Button.module.css";

// eslint-disable-next-line react/prop-types
function Button({ children, icon, isOutline }) {
  return (
    <button className={isOutline ? styles.outlineBtn : styles.primaryBtn}>
      {icon}
      {children}
    </button>
  );
}

export default Button;
