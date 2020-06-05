import React, { useContext } from "react";
import Todos from "./Todos";
import SidebarContext from "../../context/sidebarcontext/sidebarContext";
const Main = () => {
  const { folders, id, allFolders } = useContext(SidebarContext);
 
  return (
    <div className="Main">
      {allFolders
        ? folders.map((folder, index) => (
            <Todos
              folderName={folder.folderName}
              color={folder.colors}
              key={index}
              id={folder.id}
            />
          ))
        : folders.map((folder, index) =>
            id === folder.id ? (
              <Todos
                folderName={folder.folderName}
                color={folder.colors}
                key={index}
                id={folder.id}
              />
            ) : null
          )}
    </div>
  );
};

export default Main;
