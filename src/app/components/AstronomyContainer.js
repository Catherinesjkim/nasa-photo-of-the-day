// First Component is called stateful (aka the smart / dynamic component) 
// Stateful has some activity and the component has an internal state. Examples of activity: data fetching, user interaction (for example button clicks), and data passing.
// Class based component will carry the state. Why do we need state? We need state, so we can save what’s happening with our dynamic application. 
// If a user clicks a button, how does the app know what to do next? Before clicking, we have a default state. After the user clicks the button, we change the state to represent what will happen next.
// We have a counter with a starting number at zero. The initial state is zero. The user clicks on the button. How are we going to fit the pieces together, and more importantly, increment or decrement the number?
// We need some kind of dynamic mechanism to represent our actions, and convert it into representational feedback/data. We call it State.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AstronomyCard from "./AstronomyCard";

export default function AstronomyContainer() {
  const [pictures, setPictures] = useState([])
  const [planetary, setPlanetary] = useState("space")
  // Inside of the method, call a GET request with axios. 
  // Axios returns a promimse, and inside that promise I have access to the data. The data is under response.data.
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/${planetary}/apod?api_key=Z8l1YBG6PmB2C9ey0Jn0qiNZSgOhQcS99ws6E5df`)
      .then(response => {
        console.log(response.data.message)
        setPictures(response.data.message)
      })
      .catch(error => {
        console.log("failed to fetch data", error)
      })
  }, [planetary]) // empty dependency array - infinite loop will happen without it. Only renders the first time. API calls over & over again. React will re-invoke the effect after every render as default.

  return (
    <div className="container">
      <button onClick={() => setPlanetary('Milky')}>Picture of the Day</button>
      <button onClick={() => setPlanetary('Way')}>Tomorrow's Picture</button>
      <div className="entry">
        {pictures.map((picture, index) => { // Array: convert into an Object. 
        return <AstronomyCard 
        key={index} 
        imgUrl={picture} 
        planetary={planetary}
        title={picture.title}
        date={picture.date}
        explanation={picture.explanation} 
        />
      })}
      </div>
    </div>
  );
}
