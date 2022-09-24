# My-Reads-AppReact Project

This is my final assessment project for Udacity's React Fundamentals course.

# proj description

#### this is a book store which contains in the main page the books you have read , want to read and the books you are currently reading

#### the search page contains all the books have the same state in the main page and you can add the book to any shelf

# creating an app

To initiate this project:

# run npm install

install all project dependencies run `npm install`.

# npm start

Then run, `npm start` to display the application..

## Directory Hierarchy

```bash
├── CONTRIBUTING.md
├── README.md - This file..
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── components
        ├── Book.js
    │   ├── Bookshelf.js
    │   └── Search.jS

    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)
