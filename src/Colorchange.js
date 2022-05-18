import React, { Component } from "react";
import { Button } from '@mui/material';
import "./App.css";
const colors = ['red', 'blue', 'green', 'yellow', 'black'];

class ColorChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxColor: 'red'
    };
  }
  
  getRandomColor() {
    const diffColors = colors.filter(color => color !== this.state.boxColor);
    const randomColorIndex = Math.floor(Math.random() * diffColors.length);
    return diffColors[randomColorIndex];
  }
  
  handleClick() {
    this.setState(({ boxColor }) => ({
      boxColor:  this.getRandomColor()
    }));
  }
  
  render() {
    return (
      <div>
        <div className="box" style={{ backgroundColor: this.state.boxColor }} />
        <Button variant="outlined" onClick={() => this.handleClick()}>Click for random color</Button>
      </div>
    );
  }
}
export default ColorChange;
