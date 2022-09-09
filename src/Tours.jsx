import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section className="containter d-block w-50 mx-auto">
      <div className="row text-center">
        <h1>Our Tours</h1>
        <div className="title-line"></div>
      </div>
      <div className="row">
      <div className="col-12">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
        ))}
      </div>
      </div>
      
    </section>
  );
}

export default Tours;
