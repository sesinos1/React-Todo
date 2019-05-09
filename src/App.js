import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  state = {
    todos: [
      {
        task: 'Learn setState()',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Style my Todo List',
        id: 1528817084358,
        completed: false
      }
    ]
  };
  handleSubmit = (e, taskName) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (id === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List : MVP</h1>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <TodoForm
          handleSubmit={this.handleSubmit}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;