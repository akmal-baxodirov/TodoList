import React, { useContext } from "react";
import SidebarContext from "../../context/sidebarcontext/sidebarContext";
const TodoItem = ({ todo, id }) => {
  const { removeTodo } = useContext(SidebarContext);
  return (
    <div className="todo-item">
      <span className='box'>
        <input type="checkbox" id={id} />
        <label htmlFor={id}></label>
        <h3>{todo}</h3>
      </span>

      <span className="deleteTodo" onClick={() => removeTodo(id)}>
        X
      </span>
    </div>
  );
};

export default TodoItem;
