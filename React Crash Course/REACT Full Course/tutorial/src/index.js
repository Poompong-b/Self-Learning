import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//Components
import { books } from "./books";
import Book from "./Book";

//Setup Vars
function BookLislt() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookLislt />, document.getElementById("root"));
