const fs = require("fs");
const path = require("path");
const express = require("express");
const { resolve, parse } = require("path");
const { json } = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.json());

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
  let authors = {};
  books.forEach((el) => {
    authors[el.author.name] = el.author.name;
  });
  return Object.values(authors);
};

const getAuthorById = function (id) {
  const books = getAllBooks();
  const book = books.find((el) => el.author.id === id);
  return book ? book.author.name : undefined;
};

const getAuthorsById = function (id) {
  const book = getBookById(id);
  // console.log(book);
  return book && book.author ? book.author.name : undefined;
};

const getAuthorByBookId = function (id) {
  const book = getBookById(id);
  return book ? book.author.name : undefined;
};

const addBook = function (data) {
  const jsonData = getAllBooks();
  jsonData.push(data);
  fs.writeFileSync(
    path.join(__dirname, "books.json"),
    JSON.stringify(jsonData)
  );
  return true;
};

const updateBook = function (data) {
  const jsonData = getAllBooks();
  let idx = jsonData.findIndex((el) => el.id === data.id);
  if (!idx) return;
  jsonData[idx] = data;
  fs.writeFileSync(
    path.join(__dirname, "books.json"),
    JSON.stringify(jsonData)
  );
  return true;
};

const getBookByQuery = function (query) {
  const books = getAllBooks();
  console.log(query);
  for (let i of Object.keys(query)) {
  }
};

app.get("/a", function (req, res) {
  res.writeHead(200);
  res.end("Hey i am a");
});

app.get("/b", function (req, res) {
  res.writeHead(201);
  res.end("Hey i am b");
});

app.get("/books", (req, res) => {
  let data;
  if (req.query.params) {
    data = getBookByQuery(req.query);
  } else {
    data = getAllBooks();
  }
  if (data) {
    res.setHeader("Content-type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(500);
    res.end("error! unable to fetch data");
  }
});

app.get("/authors", (req, res) => {
  const authors = getAllAuthors();
  if (authors) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(authors));
  } else {
    res.writeHead(500);
    res.end("unable to find authors!");
  }
});

app.post("/books", (req, res) => {
  const data = req.body;
  const success = addBook(data);
  if (success) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ status: true }));
  } else {
    res.writeHead(500);
    res.end(JSON.stringify({ status: false }));
  }
});

app.put("/books", (req, res) => {
  const data = req.body;
  const success = updateBook(data);
  if (success) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({ status: true }));
  } else {
    res.writeHead(500);
    res.end(JSON.stringify({ status: false }));
  }
});

// authorization
app.use(function (req, res, next) {
  if (
    req.headers.username === "Jashwanth" &&
    req.headers.password === "Jashwanth@878"
  ) {
    next();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(401);
    res.end(JSON.stringify({ status: "authorization fail" }));
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
    res.writeHead(500);
    res.end("unable to find the book!");
  }
});

app.get("/authors/:id", (req, res) => {
  let id = parseInt(req.params.id.slice(1));
  const authors = getAuthorById(id);
  if (authors) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(authors));
  } else {
    res.writeHead(500);
    res.end("error! no authors found");
  }
});

app.get("/books/:id/author", function (req, res) {
  const id = parseInt(req.params.id.slice(1));
  const book = getAuthorByBookId(id);
  if (book) {
    res.writeHead(200);
    res.end(JSON.stringify(book));
  } else {
    res.writeHead(500);
    res.end("can't find the author");
  }
});

// app.all("/books/?+", (req, res) => {
//   console.log(req);
// });

app.listen(8080, () => {
  console.log("application started");
});

// 1. getAllBooks() <---> /books
// 2. getBookById(id) <----> /books/:id
// 3. getAllAuthors() <----> /authors
// 4. getAuthorById(id) <-----> /authors/:id
// 6. getAuthorByBookId(id) <----> books/:id/author

// Homework
// 1. remove duplicates from getAllAuthors
// 2. apply filter to get book by name
// 3. update a book ---> PUT
// queryParameters.
