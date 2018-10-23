import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.person) {
      return <div>No person found</div>;
    }

    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <div>
              <img src={this.state.person.picture.large} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
