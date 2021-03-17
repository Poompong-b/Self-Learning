import React, { useState, useEffect } from "react";

const ShowHide = () => {
  //States
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>

      {show && <Item />}
    </>
  );
};

const Item = () => {
  //States
  const [size, setSize] = useState(window.innerWidth);

  //Effect
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    //Cleanup
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  //Functions
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size} px</h2>
    </div>
  );
};

export default ShowHide;
