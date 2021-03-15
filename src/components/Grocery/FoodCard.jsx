import React from "react";

const FoodCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} />
        <span className="card-title">{props.title}</span>
      </div>
      <div className="card-content">
        <p>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively and the cost is {props.price}
        </p>
      </div>
      <div className="card-action">
        <a href="#">Add To Cart</a>
      </div>
    </div>
  );
};

export default FoodCard;
