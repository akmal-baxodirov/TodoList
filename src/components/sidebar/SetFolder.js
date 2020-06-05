import React, { useState, Fragment, useContext } from "react";
import RadioInputs from "./RadioInputs";
import SidebarContext from "../../context/sidebarcontext/sidebarContext";
const SetFolder = () => {
  const { setFolder } = useContext(SidebarContext);

  const [addFolder, setAddFolder] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [colors, setColors] = useState("");

  const inputColors = [
    "#C9D1D3",
    "#42B883",
    "#64C4ED",
    "#FFBBCC",
    "#B6E6BD",
    "#C355F5",
    "#09011A",
    "#FF6464",
  ];

  const toggleHandler = () => {
    setAddFolder(!addFolder);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFolder(folderName, colors);
    setFolderName("");
    setAddFolder(!addFolder);
  };

  const changeHandler = (e) => {
    setFolderName(e.target.value);
  };
  const colorChangeHandler = (e) => {
    setColors(e.target.htmlFor);
  };

  return (
    <Fragment>
      <div className="setfolder">
        <button onClick={toggleHandler}>
          <span>+</span>Add Folder
        </button>
        {addFolder && (
          <div className="addfolder">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Name of the Folder"
                value={folderName}
                required
                onChange={changeHandler}
              />

              <div className="radio-toolbar">
                {inputColors.map((color, index) => (
                  <RadioInputs
                    color={color}
                    key={index}
                    onChange={colorChangeHandler}
                  />
                ))}
              </div>

              <button type="submit">Create</button>
            </form>
            <button className="close" onClick={toggleHandler}>
              X
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default SetFolder;
