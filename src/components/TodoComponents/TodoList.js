// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            chores: "",
        }
    }
}

export default TodoList;