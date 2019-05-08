import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.addListItem}>
      <input
        type="text"
        value={props.task}
        name="task"
        onChange={props.changeHandler}
        placeholder="task"
        task="task"
      />
      <button onClick={props.addListItem}>Add items</button>
    </form>
  );
};

export default TodoForm;