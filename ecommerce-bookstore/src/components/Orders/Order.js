import styles from "./css/Order.module.css";

export const Order = (props) => {
  return (
    <div className={styles.order}>
      <header>
        <p>{`Order Placed : ${props.order.date}`}</p>
        <p>Status : Delivered</p>
      </header>
      <div className={styles.details}>
        <div>
          <img src={props.order.image} alt="Order" />
        </div>
        <div className={styles.info}>
          <h1>{props.order.title}</h1>
          <p>{props.order.authors.join(", ")}</p>
          <p>{`$ ${props.order.price}`}</p>
        </div>
      </div>
    </div>
  );
};
