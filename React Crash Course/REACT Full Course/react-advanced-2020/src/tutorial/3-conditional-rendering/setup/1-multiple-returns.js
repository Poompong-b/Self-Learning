import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  //States
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUsers] = useState("default user");

  //Effects
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUsers(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //Component
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
