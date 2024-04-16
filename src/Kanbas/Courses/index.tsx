import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Breadcrumbs from "./Breadcrumbs";
import { useEffect, useState } from "react";
import axios from "axios";
import * as client from "./Modules/client";

const API_BASE = process.env.REACT_APP_API_BASE;

function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const COURSES_API = `${API_BASE}api/courses`;

  const [course, setCourse] = useState<any>({ _id: "" });
  const [courseIdMongo, setCourseIdMongo] = useState<any>("");

  const getCourseId = async (courseId?: string) => {
    client.findCourseId(courseId).then(
      (course) => {
        console.log(course._id);
        setCourseIdMongo(course._id);
      });
  };

  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}`);
    console.log(response.data);
    setCourse(response.data);
    console.log(course)
  };
  useEffect(() => {
    console.log("WOWOWOW" + courseId)
    getCourseId(courseId);
    console.log("OWOWOW: " + courseIdMongo)
    findCourseById(courseIdMongo);
  }, [courseId]);

  return (
    <div className="wd-kanbas-courses">
      {Breadcrumbs(course?.number, course?.name, pathname)}
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
