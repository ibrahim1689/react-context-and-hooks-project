import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);

  return (
    <li onClick={() => removeBook(book.id)} className="book">
      <h3 className="title"> {book.title} </h3>
      <p className="author"> by {book.author}</p>
    </li>
  );
};

export default BookDetails;
