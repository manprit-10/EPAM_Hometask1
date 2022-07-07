import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../UI/Button";
import { useDispatch } from "react-redux";
import styles from "./css/BookData.module.css";
import { cartActions } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

export const BookData = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const retreivebooks = async () => {
    const res = await fetch(`http://localhost:3001/books/${id}`);
    const data = await res.json();
    return {
      id: data.id,
      price: data.price,
      quantity: 1,
      title: data.title,
      authors: data.authors,
      image: data.thumbnailUrl,
      isbn: data.isbn,
      categories: data.categories,
      date: new Date().toDateString(),
      description: data.shortDescription,
    };
  };

  useEffect(() => {
    const getBookData = async function () {
      const bookData = await retreivebooks();
      setBook(bookData);
    };
    getBookData();
  }, []);

  const dispatch = useDispatch();
  const addToCart = function () {
    dispatch(cartActions.addBook(book));
  };
  
  return (
    <section className={styles.section}>
      <div className={styles.book}>
        <img src={book.image} alt="Book" />

        <div className={styles.details}>
          <h2>{book.title}</h2>
          <p>Authors : {book.authors && book.authors.join(", ")}</p>
          <p>ISBN : {book.isbn}</p>
          <p>Category : {book.categories && book.categories.join(", ")}</p>
          <p>Price : {`$ ${book.price}`}</p>
          <div className={styles.actions}>
            <Button handler={addToCart}>Add To Cart</Button>
            <Link to="/cart">
              <Button handler={addToCart}>Buy Now</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h2>Description</h2>
        <p> {book.description}</p>
      </div>
    </section>
  );
};
