import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  //States
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  //Efffects
  useEffect(() => {
    fetchTours();
  }, []);

  //Fetching
  const fetchTours = async () => {
    //Set Loading
    setLoading(true);

    try {
      const res = await fetch(url);
      const tours = await res.json();

      //Set Loading to false
      setLoading(false);

      //Set Tours Data
      setTours(tours);
    } catch (error) {
      //Set Loading to false
      setLoading(false);
      console.log(error);
    }
  };

  //Functions
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  //Component
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      {tours.length === 0 && (
        <div className="title">
          <h2>No Tour Left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
