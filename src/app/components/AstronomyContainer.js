// First Component is called stateful (aka the smart / dynamic component) 

// Stateful has some activity and the component has an internal state. Examples of activity: data fetching, user interaction (for example button clicks), and data passing.

// Class based component will carry the state. Why do we need state? We need state, so we can save what’s happening with our dynamic application. 

// If a user clicks a button, how does the app know what to do next? Before clicking, we have a default state. After the user clicks the button, we change the state to represent what will happen next.

// We have a counter with a starting number at zero. The initial state is zero. The user clicks on the button. How are we going to fit the pieces together, and more importantly, increment or decrement the number?

// We need some kind of dynamic mechanism to represent our actions, and convert it into representational feedback/data. We call it State.

import React, { useState } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';


class AstronomyContainer {
  // Call the constructor() method where initializes the state. The initial state is just an empty array. 
  // constructor() {
  //   super ();
      
    // this.state = {
    //   astronomy: []
    // }
  
  }
  // Call a lifecycle called componentDidMount and inside the lifecycle method declare the END_POINT and API_KEY constants.
  componentDidMount(); {
    const API_KEY = "Z8l1YBG6PmB2C9ey0Jn0qiNZSgOhQcS99ws6E5df";
    const END_POINT = "https://api.nasa.gov/planetary/apod?api_key=";

    // Inside of the componentDidMount method, call a GET request with axios. 
    // Axios returns a promimse, and inside that promise I have access to the data. The data is under response.data.
    axios
      .get(END_POINT+API_KEY)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error, 'failed to fetch data')
      });
  }

  // render(); {
  //   return (
  //     <div />
  //   )
  // }


export default AstronomyContainer;
