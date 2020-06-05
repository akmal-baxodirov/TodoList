import React from "react";
import AllFolders from "./AllFolders";
import SetFolder from "./SetFolder";
import Folders from "./Folders";
const Sidebar = () => {
  return (
      <div className="Sidebar">
        <AllFolders />
        <Folders />
        <SetFolder />
      </div>
  );
};

export default Sidebar;
