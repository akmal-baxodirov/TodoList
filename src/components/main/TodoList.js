import React, { useContext } from "react";
import SidebarContext from "../../context/sidebarcontext/sidebarContext";
import TodoItem from "./TodoItem";

const TodoList = ({ id }) => {
  const { todos} = useContext(SidebarContext);
  return (
    <div className="todo-list">
      {todos.map((todo) =>
            todo.folderId === id ? (
              <TodoItem todo={todo.todo} key={todo.id} id={todo.id} />
            ) : null
          )}
    </div>
  );
};

export default TodoList;
