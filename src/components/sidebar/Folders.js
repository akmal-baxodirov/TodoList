import React, { useContext } from "react";
import Folder from "./Folder";
import SidebarContext from "../../context/sidebarcontext/sidebarContext";
const Folders = () => {
  const { folders } = useContext(SidebarContext);
  return (
    <div className="folders">
      {folders.map((folder, index) => (
        <Folder
          folder={folder.folderName}
          colors={folder.colors}
          key={index}
          id={folder.id}
        />
      ))}
    </div>
  );
};

export default Folders;
