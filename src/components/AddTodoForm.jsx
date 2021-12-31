import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/TodoSlice";

const AddTodoForm = () => {
  const dispatch = useDispatch();

  const [value, setValue] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        title: value,
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default AddTodoForm;
