import React, { Component } from "react";

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Initial state
    };
  }
  handleEvent = () => {
    this.setState({
      // Update state
    });
  };

  render() {
    return (
      <p>Hello world!</p> // JSX
    );
  }
}

export default Comments;
