// Second stateless component is stateless(aka the dumb / dummy / static component).
// Always returns the same output. Component where data “flows” inside. Mostly used for representing something. Does not include the state, only props!
import React from 'react';

const AstronomyCard = props => {
  return (
    <div className="astronomy-list"/>

    </div>
  );
};

export default AstronomyCard;