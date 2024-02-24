import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";

const Breadcrumbs = (
  courseNumber: string | undefined,
  courseName: string | undefined,
  pageType: string | undefined
) => {
  const type = pageType?.includes("Module")
    ? " > Modules"
    : pageType?.includes("Home")
    ? " > Home"
    : pageType?.includes("Assignment")
    ? " > Assignments"
    : "";
  return (
    <>
      <div className="d-flex"><h4>
        <HiMiniBars3 /> Course {courseNumber} {courseName} {type} {"    "}
      </h4>
      <button className="btn btn-outline-secondary inline-button">
        Student View <FaGlasses />
      </button></div>
    </>
  );
};
export default Breadcrumbs;
