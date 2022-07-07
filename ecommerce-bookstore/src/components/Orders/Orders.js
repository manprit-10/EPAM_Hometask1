import { useSelector } from "react-redux";
import { Order } from "./Order";
import styles from "./css/Orders.module.css";

export const Orders = () => {
  const ordersList = useSelector(function (state) {
    return state.orders.orders;
  });

  const content = ordersList.map(function (order) {
    return (
      <li key={order.id}>
        <Order order={order} />
      </li>
    );
  });

  return (
    <div className={styles.orders}>
      <h2> My Orders</h2>
      <ul className={styles.lists}>
        {ordersList.length > 0 && content}
        {ordersList.length === 0 && (
          <p className={styles.message}>
            {" "}
            You don't have any orders. Place some orders!!
          </p>
        )}
      </ul>
    </div>
  );
};
