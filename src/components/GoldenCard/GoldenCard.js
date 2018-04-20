import React from "react";
import "./GoldenCard.css";

const GoldenCard = props => (
  <button>
    <img alt={props.id} src={props.image} onClick={() => props.handleClick(props.id)} />
  </button>
);

export default GoldenCard;
