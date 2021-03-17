import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  //States
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //Functions
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index < people.length - 1 ? index + 1 : 0;
      console.log(newIndex);

      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index > people.length - 1 ? index - 1 : 3;

      return newIndex;
    });
  };

  const randomPerson = () => {
    setIndex(() => {
      let randomIndex = Math.floor(Math.random() * people.length);
      if (randomIndex === index) {
        randomPerson();
      }
      return randomIndex;
    });
  };

  //Return
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
