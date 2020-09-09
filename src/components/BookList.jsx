import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((book, index) => (
          <BookDetails key={index} book={book} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty-list">No books to read. Hello free time :)</div>
  );
};

export default BookList;
