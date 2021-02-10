import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//Setup Vars
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91NKthYHyZL._AC_UL200_SR200,200_.jpg",
    title: "The Four Winds: A Novel",
    author: "Anna Dewdney",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/811KvYSRgEL._AC_UL200_SR200,200_.jpg",
    title: "Burn After Writing (Pink)",
    author: "Sharon Jones",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91Fqo5QznlL._AC_UL200_SR200,200_.jpg",
    title: "Firefly Lane: A Novel",
    author: "Kristin Hannah",
  },
];

function BookLislt() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>;<h2>{author}</h2>;
    </article>
  );
};

ReactDOM.render(<BookLislt />, document.getElementById("root"));
