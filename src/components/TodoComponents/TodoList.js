// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const students = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
];

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: listitems,
            name: "",
        };
    }

    addListItem = e => {
        e.preventDefault();
        this.setState({
            todoList: [
            ...this.state.todoList,
            {
                name: this.state.name,
            }
          ]
        });
    };

    changeHandler = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
      };

      render() {
        return (
          <div>
            <h1>Todo List: MVP</h1>
            <div className="class-list">
              {this.state.todoList.map(todo => (
                <Todo todo={todo} />
              ))}
            </div>
            <TodoForm
              addListItem={this.addListItem}
              changeHandler={this.changeHandler}
              name={this.state.name}
            />
          </div>
        );
    }
}

export default TodoList;