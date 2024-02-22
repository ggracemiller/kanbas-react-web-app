import ComingUp from "./ComingUp";
import CourseStatus from "./CourseStatus";
import Todo from "./Todo";

function SidePanel() {
  return (
    <>
      <div className="status-column">
        <CourseStatus />
        <Todo />
        <ComingUp />
      </div>
    </>
  );
}
export default SidePanel;
