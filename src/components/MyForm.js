import React, { Component } from "react";

export default class MyForm extends Component {
  state = {
    name: "xD",
    favoritePet: "",
    rememberMe: false,
    title: "Mr."
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleChange2 = event => {
    this.setState({ favoritePet: event.target.value });
  };

  handleChange3 = event => {
    this.setState({ rememberMe: event.target.checked });
  };

  handleChange4 = event => {
    this.setState({ title: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleChange} />
        <br />
        <textarea
          value={this.state.favoritePet}
          onChange={this.handleChange2}
        />
        <br />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleChange3}
        />
        <div>
          <select value={this.state.title} onChange={this.handleChange4}>
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}
