import styles from "./css/Button.module.css";

export const Button = (props) => {
  return (
    <button onClick={props.handler} className={styles.btn}>
      {props.children}
    </button>
  );
};
