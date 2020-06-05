import React, { Fragment, useContext } from "react";
import SidebarContext from "../../context/sidebarcontext/sidebarContext";
import PropTypes from "prop-types";
const Folder = ({ folder, colors, id }) => {
  const { removeFolder, setTodosID } = useContext(SidebarContext);

  return (
    <Fragment>
      <div className="folder">
        <button onClick={() => setTodosID(id)}>
            <span className="circle" style={{ background: colors }}></span>
            {folder}
        </button>
        <span onClick={() => removeFolder(id)} className="delete">
          X
        </span>
      </div>
    </Fragment>
  );
};

Folder.propTypes = {
  folder: PropTypes.string.isRequired,
  colors: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Folder;
