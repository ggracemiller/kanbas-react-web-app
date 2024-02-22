import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function ComingUp() {
  return (
    <>
      <h3>Coming Up</h3>
      <Link to="/Kanbas/Calendar">View Calender</Link>
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/Kanbas/#">
          <FaCalendarAlt /> Lecture
            CS4550.12631.202410 Sep 7 at 11:45am
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Kanbas/#">
          <FaCalendarAlt /> Lecture
            CS4550.12631.202410 Sep 11 at 11:45am
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Kanbas/#">
          <FaCalendarAlt /> CS5610.06 SP23 Lecture Sep
            11 at 6pm
          </Link>
        </li>
      </ul>
    </>
  );
}
export default ComingUp;
