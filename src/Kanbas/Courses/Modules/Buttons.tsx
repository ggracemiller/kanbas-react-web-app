import { FaEllipsisV } from "react-icons/fa";

function Buttons() {
  return (
    <span className="module-buttons">
      <button className="btn btn-outline-secondary">Collapse All</button>
      <button className="btn btn-outline-secondary">View Progress</button>
      <select className="select-button">
        <option>Publish All</option>
        <option>Publish All Modules and Items</option>
        <option>Publish Modules only</option>
        <option>Unpublish All Modules</option>
      </select>
      <button className="btn btn-danger">+ Module</button>
      <button className="btn btn-outline-secondary">
      <FaEllipsisV className="ms-2" />
      </button>
    </span>
  );
}
export default Buttons;
