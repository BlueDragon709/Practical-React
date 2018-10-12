import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/ImageSlider";

// const Body = () => (
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
// );

class App extends Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div className="App">
        <ImageSlider />
      </div>
    );
  }
}

export default App;
