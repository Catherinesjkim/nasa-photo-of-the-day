// Second stateless component is stateless(aka the dumb / dummy / static component).
// Always returns the same output. Component where data “flows” inside. Mostly used for representing something. Does not include the state, only props!
import React from 'react';

const AstronomyCard = ({hdurl, planetary, title, date, explanation}) => {
  return (
    <div className="astronomy-card">
      <div className="astronomy-image-wrapper" >
        <img src={hdurl} className="astronomy-image" />
      </div>

      {/* <h2>{planetary}</h2> */}
      <h2>Title: {title}</h2>
      <p>Date: {date}</p>
      <div className="bottom">
        <p>Explanation: {explanation}</p>
      </div>
    </div>
  );
};

export default AstronomyCard;