import React, { useState } from "react";


import Book from "../components/Book"

const Bookshelf = props => {
  const { books, title,setShelfType, setBooks } = props;




  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books &&
            books.map((item, index) => (
              <li key={index}>
                <Book
                  title={item.title}
                  authors={item.authors}
                  setShelfType={setShelfType}
                  URL={item.imageLinks && item.imageLinks.thumbnail}
                  bookshelf={item.shelf}
                  book={item}
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