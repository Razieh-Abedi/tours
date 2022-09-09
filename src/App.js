import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);
  // useEffect(() => {
  //   fetch("https://course-api.com/react-tours-project");
  //     .then((res) => res.json())
  //     .then(()=>{
  //       setIsLoading(false);
  //     })
  //     .then((data) => {
  //       setTours(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://course-api.com/react-tours-project"
      );
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (tours.length === 0) {
    return (
      <main className="container my-5">
        <div className="text-center">
          <h2 className="m-3">No tours left</h2>
          <button className="btn btn-primary" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <div className="container">
      <Tours tours={tours} removeTour={removeTour} />
      <Footer />
    </div>
  );
}

export default App;
