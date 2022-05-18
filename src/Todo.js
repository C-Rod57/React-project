import React, { Component } from 'react';
import { Button } from '@mui/material';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    this.setState({
      [key]: value
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <div>
          To-do list:
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <Button
            variant="contained"
            onClick={() => this.addItem()}
          >
            Add
          </Button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <Button
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </Button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
