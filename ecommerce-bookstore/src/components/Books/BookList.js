import { Container } from "../UI/Container";
import { Book } from "./Book";
import styles from "./css/BookList.module.css";
import { useSelector } from "react-redux";

export const BookList = () => {
  const books = useSelector((state) => {
    return state.books.books;
  });

  const content = books.map((book) => {
    return <Book book={book} key={book.id} />;
  });

  return (
    <Container>
      <h1 className={styles.heading}>Books</h1>
      <div className={styles.bookList}>{content}</div>
    </Container>
  );
};
