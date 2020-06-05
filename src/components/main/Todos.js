import React from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
// import SidebarContext from '../../context/sidebarcontext/sidebarContext'
const Todos = ({folderName, color, id}) => {
    return (
        <div className='todos'>
            <h1 style={{color: color}}>{folderName}</h1>
            <span className="line"></span>
            <TodoList id={id} />
            <AddTodo id={id} />
        </div>
    );
}

export default Todos;
