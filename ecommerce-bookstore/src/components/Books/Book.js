import styles from "./css/Book.module.css";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addBook(book));
  };
  return (
    <div>
      <div className={styles.book}>
        <Link to={`/book/${book.id}`} className={styles.link}>
          <div className={styles["img-box"]}>
            <img src={props.book.image} alt="book" />
          </div>
          <div className={styles.details}>
            <h2>{props.book.title.split(":")[0]}</h2>
            <p className={styles.authors}>{props.book.authors.join(", ")}</p>
          </div>
        </Link>
        <Button handler={addToCartHandler}>Add to Cart</Button>
      </div>
    </div>
  );
};
