import { Link } from "react-router-dom";

function Todo() {
  return (
    <>
      <h3>To Do</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to='/Kanbas/#'>
            <i className="fa-regular fa-circle-check"></i> Grade A1
          </Link>
        </li>
        <li className="list-group-item">
          <Link to='/Kanbas/#'>
            <i className="fa-regular fa-circle-check"></i> Grade A2
          </Link>
        </li>
      </ul>
    </>
  );
}
export default Todo;
