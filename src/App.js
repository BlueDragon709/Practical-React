import React, { Component } from "react";
// /import { Header } from "./components/Header";
import { Body, Body2 } from "./components/Body";
import "./App.css";

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
        <Header
          title="Hello from App"
          num={5}
          myArr={[1, 2, 3]}
          myFunc={this.add}
          myObj={{
            a: 5,
            b: 6
          }}
        />
        <Body2 />
        <Body
          myFunc={this.add}
          text="this is working as it should"
          text2="no it doesn't"
        />
        <Body
          myFunc={this.add}
          text="this is not working as it should"
          text2="yes it does"
        />
      </div>
    );
  }
}

export default App;
