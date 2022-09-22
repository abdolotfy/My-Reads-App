import React, { useState } from "react";

// import Book from "./Book";
import Book from "../components/Books"

const Bookshelf = props => {
  const { books, title, setBooks } = props;


  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((book, index) => (
              <li key={index}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  imageUrl={book.imageLinks && book.imageLinks.thumbnail}
                  bookshelf={book.shelf}
                  book={book}
                  setBooks={setBooks}
                />
              </li>
            ))}
        </ol>
       
      </div>
    </div>
  );
};

export default Bookshelf;