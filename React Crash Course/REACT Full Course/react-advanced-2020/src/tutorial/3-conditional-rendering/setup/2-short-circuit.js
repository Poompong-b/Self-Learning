import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  //States
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  return (
    <>
      <h1>{text || "John Doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setError(!error);
        }}
      >
        Toggle Error
      </button>
      {error && <h1>Error...</h1>}
      {error ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
