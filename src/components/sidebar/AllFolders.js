import React, {useContext} from "react";
import SidebarContext from '../../context/sidebarcontext/sidebarContext'
const AllFolders = () => {
  const {allFoldersTrue} = useContext(SidebarContext);
  return (
    <div className="allfolders">
      <button onClick={allFoldersTrue}>
        <i className="fas fa-ellipsis-v"></i>All Folders
      </button>
    </div>
  );
};

export default AllFolders;
