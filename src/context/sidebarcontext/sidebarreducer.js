import {
  FOLDER_HANDLER,
  REMOVE_FOLDER,
  SET_TODOS_ID,
  ADD_TODOS,
  REMOVE_TODO,
  ALL_FOLDERS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case FOLDER_HANDLER: {
      return {
        ...state,
        folders: action.payload,
      };
    }
    case REMOVE_FOLDER: {
      return {
        ...state,
        folders: action.payload,
      };
    }
    case SET_TODOS_ID: {
      return {
        ...state,
        id: action.payload,
        allFolders: false,
      };
    }
    case ADD_TODOS: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: action.payload,
      };
    }
    case ALL_FOLDERS: {
      return {
        ...state,
        allFolders: action.payload,
      };
    }
    default:
      return state;
  }
};
