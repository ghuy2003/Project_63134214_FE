import React from "react";

const CardItem = ({ imgSrc, name, description, price }) => {
  return (
    <div className="col-md-6 col-lg-6 col-xl-4">
      <div className="rounded position-relative fruite-item">
        <div className="fruite-img">
          <img src={imgSrc} className="img-fluid w-100 rounded-top" alt="" />
        </div>
        <div
          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
          style={{ top: "10px", left: "10px" }}
        >
          Fruits
        </div>
        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
          <h4>{name}</h4>
          <p>{description}</p>
          <div className="d-flex justify-content-between flex-lg-wrap">
            <p className="text-dark fs-5 fw-bold mb-0">{price}</p>
            <a
              href="#"
              className="btn border border-secondary rounded-pill px-3 text-primary"
            >
              <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to
              cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
