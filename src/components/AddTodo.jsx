import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handelNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handelDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handelAddButtonClicked}
          >
            <MdLibraryAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
