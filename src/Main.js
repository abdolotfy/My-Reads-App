import Bookshelf from "./components/Bookshelf";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
const bookshelves = [
    { title: "Currently Reading", shelfName: "currentlyReading" },
    { title: "Want to Read", shelfName: "wantToRead" },
    { title: "Read", shelfName: "read" }
  ];


// making the main page in a separte file 

const Main = () => {



    const [books, setBooks] = useState([]);
    const history= useHistory();
    
   // get all the books from the api 
   
     useEffect(() => {
       BooksAPI.getAll().then(books => {
         setBooks(books);
       });
     }, []);


return (

    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        {bookshelves.map((bookshelf, index) => (
          <Bookshelf
            key={index}
            title={bookshelf.title}
            books={
              books &&
              books.filter(
                book => book && book.shelf === bookshelf.shelfName
              )
            }
            setBooks={setBooks}
          />
        ))}
      </div>
    </div>
    <div className="open-search">
      <button onClick={() => history.push("/search")}>Add a book</button>
    </div>
  </div>
)
}




export default Main ;