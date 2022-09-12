import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section className="containter">
      <div className="row text-center">
        <h1>Our Tours</h1>
        <div className="title-line"></div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 gx-5 gy-3">
          {tours.map((tour) => (
            <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tours;
