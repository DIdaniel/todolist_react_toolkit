import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/features/TodoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(
      toggleComplete({
        id: id,
        completed: !completed,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  };

  return (
    <li>
      <div>
        <span>
          <input type="checkbox" checked={completed} onChange={handleCompleteClick} />
          {title}
        </span>
        <button onClick={handleDeleteClick}>DELETE</button>
      </div>
    </li>
  );
};

export default TodoItem;
