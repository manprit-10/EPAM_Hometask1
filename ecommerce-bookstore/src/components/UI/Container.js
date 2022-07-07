import styles from "./css/Container.module.css";

export const Container = (props) => {
    
  return <div className={styles.container}>{props.children}</div>;
};
