import React, { Component } from "react";
import "./App.css";
import Box from "./components/box";
export default class App extends Component {
  state = {
    redBoxes: []
  };
  changeColor(i) {
    console.log("click5ed");
    var newBoxes = this.state.redBoxes;

    if (this.state.redBoxes.length < 2) {
      newBoxes.push(i);
    } else {
      newBoxes.push(i);
      newBoxes.shift();
    }

    this.setState({ redBoxes: newBoxes });
  }
  render() {
    const boxes = [];
    const redBoxes = this.state.redBoxes;
    for (let i = 0; i < 16; i++) {
      if (redBoxes.includes(i)) boxes.push(<Box key={i} color="red" />);
      else
        boxes.push(
          <Box
            key={i}
            index={i}
            colorChange={index => {
              this.changeColor(index);
            }}
            color="blue"
          />
        );
    }
    return <div className="container">{boxes}</div>;
  }
}
