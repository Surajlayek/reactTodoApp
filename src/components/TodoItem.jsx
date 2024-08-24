import { RiDeleteBin6Line } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeletClick }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeletClick(todoName)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
