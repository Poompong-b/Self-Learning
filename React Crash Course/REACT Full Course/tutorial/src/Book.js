import React from "react";

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  //Onclick
  const clickHandler = () => {
    alert("Hello World");
  };

  const compleExample = (author) => {
    console.log(author);
  };

  return (
    <article>
      <img src={img} alt="" />
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      ;<h2>{author}</h2>;
      <button type="button" onClick={clickHandler}>
        Hello
      </button>
      <button type="button" onClick={() => compleExample(author)}>
        Complex
      </button>
    </article>
  );
};

export default Book;
