import React, { useState, useContext } from "react";
import SidebarContext from '../../context/sidebarcontext/sidebarContext'
const AddTodo = ({id}) => {
  const {addTodos} = useContext(SidebarContext);
  const [addToggle, setAddToggle] = useState(false);
  const [todoName, setTodoName] = useState("");

  const togglehandler = () => {
    setAddToggle(!addToggle);
    setTodoName('');
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTodos(todoName, id)
    setTodoName('');
    setAddToggle(!addToggle);
  };

  const changeHandler = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <div className="addTodo">
      <button onClick={togglehandler}>
        <span>+</span> New Todo
      </button>
      {addToggle && (
        <div className="addForm">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Name of the Todo"
              value={todoName}
              required
              onChange={changeHandler}
            />
            <div className="addForm__btn">
              <button type="submit">Create</button>
              <button type="reset" onClick={togglehandler} > Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
