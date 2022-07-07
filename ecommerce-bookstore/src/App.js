import "./App.css";
import { Header } from "./components/Layout/Header";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBooks } from "./redux/actions/fetchBooks";
import { Routing } from "./routes/routes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routing />
    </Router>
  );
}

export default App;
