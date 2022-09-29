import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import { useHistory } from "react-router-dom";

import Book from "./Book"

// search page in a separte file 
const Search = () => {
  const [searchdata,setSearchData]=useState([]);
   const[inputValue,setInputValue]=useState("");
    const filterBooks = searchdata.filter((item) => (item.title.toLowerCase().includes(inputValue.toLowerCase())))
   //console.log(data);
   const history = useHistory();
   const [savedBooks,setSavedBooks]=useState({});
  

  useEffect(()=>{
  BooksAPI.search(inputValue,20).then((data) => {if(!data.error){
    setSearchData(data)
  } else {
   setSearchData([]);
  }})
  
  },[inputValue])
  console.log(searchdata);
 
  return (
  <>
  <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => history.push("/")}
            >
              Close
            </a>
           
          
          
    <div className="search-books-input-wrapper">
      <input
        type="text"
        placeholder="Search by title, author, or ISBN"
        value={inputValue}
        onChange={((e)=> setInputValue(e.target.value))}
  
      />
    </div>
    </div>
  
  <div className="search-books-results">
    <ol className="books-grid">
    {searchdata && searchdata.map((item,index)=>{
                      
                        return(
                        
                          <Book key={index}
                          title={item.title}
                          authors={item.authors}
                          URL={item.imageLinks && item.imageLinks.thumbnail}
                          bookshelf={item.shelf}
                          book={item}
                          
                          />   
                      
                     
                        )
                      } )}
    
    </ol>
  </div>
  </div>
  </>
  )
  }
  export default Search ;

