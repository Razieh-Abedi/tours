import React, { useState } from "react";

function Tour({ id, image, info, price, name, removeTour }) {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className="col">
      <div className="card tour-card">
        <img className="card-img-top w-100 h-50" src={image} alt={name} />
        <div className="card-body h-50 w-100 d-flex flex-column justify-content-evenly">
          <div className="card-title d-flex justify-content-between">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p className="card-text">
            {isReadMore ? info : `${info.substring(0, 200)}...`}
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setIsReadMore(!isReadMore)}
            >
              {isReadMore ? "Show Less" : "Read More"}
            </button>
          </p>
          <button
            className="btn btn-primary mx-auto d-block w-25"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tour;
