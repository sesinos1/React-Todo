// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const listitems = [
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
];

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: listitems,
            task: "",
        };
    }

    addListItem = e => {
        e.preventDefault();
        this.setState({
            todoList: [
            ...this.state.todoList,
            {
                task: this.state.task,
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
              task={this.state.task}
            />
          </div>
        );
    }
}

export default TodoList;