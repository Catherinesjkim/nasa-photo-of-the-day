// Second stateless component is stateless(aka the dumb / dummy / static component).
// Always returns the same output. Component where data “flows” inside. Mostly used for representing something. Does not include the state, only props!
import React from 'react';

const AstronomyCard = props => {
  return (
    <div className="astronomy-card" key={props.hdurl}>
      <img className="astornomy-image" alt="random pic" src={props.imgUrl}/>
      <h2>{props.planetary}</h2>
      <h2>Picture Title: {props.title}</h2>
      <p>Date: {props.date}</p>
      <div className="bottom">
        <p>Explanation: {props.explanation}</p>
      </div>
    </div>
  );
};

export default AstronomyCard;