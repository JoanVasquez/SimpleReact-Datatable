import React, { Component } from "react";
import TodoList from "./Components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <TodoList />
      </div>
    );
  }
}

export default App;
