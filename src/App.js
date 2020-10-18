// I don't think that the school-issued chromebooks can run this.
// It throws an out of memory exception.
// Actually it does work, it just might take a while

// OVERVIEW
// Allow input of many items on one screen
// On the next screen, have all of them by reorganizeable (with and play to allow multiple votes)
// Once you are satisfied, you can move onto the final screen
// It will display the rankings of the vote, using many voting systems



// TODO: Integrate with some database (repl's could be pretty good but I don't know how well that would work deploying with surge)

import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Yay it is working!
      </div>
    );
  }
}

export default App;
