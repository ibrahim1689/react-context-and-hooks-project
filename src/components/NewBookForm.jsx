import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { addBook } = useContext(BookContext);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
      }}
    >
      <input
        required
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Book title"
        value={title}
      />
      <input
        required
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Book author"
        value={author}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};

export default NewBookForm;
