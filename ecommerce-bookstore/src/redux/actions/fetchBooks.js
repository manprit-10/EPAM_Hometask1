import { booksAction } from "../slices/bookSlice";

export const fetchBooks = () => {
  return async (dispatch) => {
    const fetchData = async  () => {
      const response = await fetch("http://localhost:3001/books");

      if (!response.ok) 
      {
        throw new Error("Could not load books");
      }
      const data = await response.json();
      return data;
    };

    try {
      const bookData = await fetchData();
      const books = bookData.map((book) => {
        return {
          id: book.id,
          title: book.title,
          price: book.price,
          quantity: 1,
          authors: book.authors,
          image: book.thumbnailUrl,
          date: new Date().toDateString(),
        };
      });
      
      dispatch(booksAction.loadBooks(books));
    } 
    catch (err) {
      console.log("Error");
    }
  };
};
