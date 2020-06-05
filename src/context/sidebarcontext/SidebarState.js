import React, { useReducer } from "react";
import SidebarReducer from "./sidebarreducer";
import SidebarContext from "./sidebarContext";
import {
  FOLDER_HANDLER,
  REMOVE_FOLDER,
  SET_TODOS_ID,
  ADD_TODOS,
  REMOVE_TODO,
  ALL_FOLDERS,
} from "../types";

const SidebarState = (props) => {
  const initialState = {
    folders: [],
    id: "",
    todos: [],
    allFolders: false,
  };
  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  const setFolder = (folderName, colors) => {
    dispatch({
      type: FOLDER_HANDLER,
      payload: [...state.folders, { folderName, colors, id: Date.now() }],
    });
  };

  const removeFolder = (id) => {
    dispatch({
      type: REMOVE_FOLDER,
      payload: state.folders.filter((folder) => folder.id !== id),
    });
  };
  const setTodosID = (id) => {
    dispatch({
      type: SET_TODOS_ID,
      payload: id,
    });
  };
  const addTodos = (todo, id) => {
    dispatch({
      type: ADD_TODOS,
      payload: [...state.todos, { todo, id: Date.now(), folderId: id }],
    });
  };
  const removeTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: state.todos.filter((todo) => todo.id !== id),
    });
  };

  const allFoldersTrue = () => {
    dispatch({
      type: ALL_FOLDERS,
      payload: true,
    });
  };

  return (
    <SidebarContext.Provider
      value={{
        folders: state.folders,
        id: state.id,
        todos: state.todos,
        allFolders: state.allFolders,
        setFolder,
        removeFolder,
        setTodosID,
        addTodos,
        removeTodo,
        allFoldersTrue
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
