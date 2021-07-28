import React from "react";
import Classes from "./DescInput.module.css";

const DescInput = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <textarea
        rows="5"
        cols="34"
        className={Classes.cardValue}
        placeholder="Enter task details"
        onChange={onChange}
      >
      </textarea>
      <input
        type="submit"
        value="ADD CARD"
        className={Classes.cardValueSubmit}
      />
    </form>
  );
};

export default DescInput;
