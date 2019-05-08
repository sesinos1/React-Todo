import React from 'react';

function TodoList(props) {
  return (
    <div className="student-card">
        <h3>{props.todo.task}</h3>
    </div>
  );
}

export default TodoList;