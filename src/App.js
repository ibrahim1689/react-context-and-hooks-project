import React from "react";
import "./App.css";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import NewBookForm from "./components/NewBookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <NewBookForm />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
