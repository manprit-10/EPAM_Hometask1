import { Card } from "../UI/Card";
import styles from "./css/CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

export const CartItem = (props) => {
  const dispatch = useDispatch();
  const book = props.item;
  const addBookHandler = function () {
    dispatch(cartActions.addBook(book));
  };

  const removeBookHandler = function () {
    dispatch(cartActions.removeBook(book.id));
  };
  return (
    <Card className={styles.item}>
      <div className={styles["img-box"]}>
        <img src={book.image} alt="Book cover"></img>
      </div>
      <div className={styles.title}>
        <h3>
          {book.title} &nbsp; - &nbsp; <span>{`$ ${book.price}`}</span>{" "}
        </h3>
        <div className={styles.actions}>
          <button onClick={removeBookHandler}>-</button>
          <span className={styles.quantity}>x {book.quantity}</span>
          <button onClick={addBookHandler}>+</button>
        </div>
      </div>
    </Card>
  );
};
