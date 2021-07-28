import React from "react";
import Classes from "./NameInput.module.css";

const NameInput = ({ onSubmit, onChange }) => {
  return (
    <form className={Classes.columnInput} onSubmit={onSubmit}>
      <input 
        type="text" 
        className={Classes.columnValue} 
        onChange={onChange}
      />
      <input 
        type="submit" 
        value="NEW COLUMN" 
        className={Classes.columnValueSubmit} 
      />
    </form>
  );
};

export default NameInput;
