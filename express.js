const fs = require("fs");
const path = require("path");
const express = require("express");
const { resolve, parse } = require("path");
const { json } = require("express");
const app = express();

const getAllBooks = function () {
  let books = fs.readFileSync(path.join(__dirname, "books.json"));
  return JSON.parse(books);
};

const getBookById = function (id) {
  let books = getAllBooks();
  let book = books.find((el) => el.id === id);
  return book;
};

const getAllAuthors = function () {
  const books = getAllBooks();
  let authors = books.filter((el) => el.author);
  return authors;
};

const getAuthorsById = function (id) {
  const book = getBookById(id);
  console.log(book);
  return book.author ? book.author.name : undefined;
};

app.get("/a", function (req, res) {
  res.writeHead(200);
  res.end("Hey i am a");
});

app.get("/b", function (req, res) {
  res.writeHead(201);
  res.end("Hey i am b");
});

app.get("", (req, res) => {
  res.writeHead(200);
  res.end("you are in localhost");
});

app.get("/books", (req, res) => {
  const data = getAllBooks();
  if (data) {
    res.setHeader("Content-type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("error! unable to fetch data");
  }
});

app.get("/books/:id", (req, res) => {
  let id = Number(req.params.id.slice(1));
  let book = getBookById(id);
  if (book) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(book));
  } else {
    res.writeHead(404);
    res.end("unable to find the book!");
  }
});

app.get("/authors", (req, res) => {
  const authors = getAllAuthors();
  if (authors) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(authors));
  } else {
    res.writeHead(404);
    res.end("unable to find authors!");
  }
});

app.get("/authors/:id", (req, res) => {
  let id = parseInt(req.params.id.slice(1));
  const authors = getAuthorsById(id);
  console.log(authors);
});

app.listen(8080, () => {
  console.log("application started");
});

// 1. getAllBooks() <---> /books
// 2. getBookById(id) <----> /books/:id
// 3. getAllAuthors() <----> /authors
// 4. getAuthorById(id) <-----> /authors/:id
// 6. getAuthorByBookId(id) <----> books/:id/author
