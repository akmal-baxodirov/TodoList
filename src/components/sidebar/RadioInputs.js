import React, { Fragment } from "react";

const RadioInputs = ({ color, onChange }) => {
  return (
    <Fragment>
      <input type="radio" id={color} name="foldercolor" value={color} />
      <label
        htmlFor={color}
        onClick={onChange}
        style={{ background: color }}
      ></label>
    </Fragment>
  );
};
export default RadioInputs;
