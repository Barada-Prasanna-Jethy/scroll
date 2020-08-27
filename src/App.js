import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  state = {
    arr: [<div className="container">hello world</div>]
  };
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.handleScroll(this.state.arr);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      this.handleScroll(this.state.arr);
    });
  }
  handleScroll = arr => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    var newArray = arr;
    newArray.push(newArray[0]);
    console.log("hell");

    this.setState({ array: newArray });
  };
  render() {
    return this.state.arr;
  }
}
