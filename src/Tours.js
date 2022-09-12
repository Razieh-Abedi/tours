import React from "react";
import Tour from "./Tour";
import Footer from "./Footer";

function Tours({ tours, removeTour }) {
  return (
    <section className="">
      <div className="text-center">
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
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default Tours;
