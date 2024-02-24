import React, { useState } from "react";
//import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";

function List() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {<Buttons />}
      <ul className="list-group wd-modules red-links">
        {modulesList.map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.course.substring(0, module.course.length - 2)}
              {": "}
              {module.title}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.subsections.map((subsection, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {subsection.title}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    <ul className="list-group">
                      {subsection.lessons.map((lesson, index) => (
                        <li className="list-group-item" key={index}>
                          {lesson.link !== "" ? (
                            <Link to={`/Kanbas/Courses/#`}>{lesson.text}</Link>
                          ) : (
                            lesson.text
                          )}
                          <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default List;
