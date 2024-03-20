import React, { useState } from "react";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function List() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      {<Buttons />} <br />
      <input
        value={module.course}
        onChange={(e) =>
          dispatch(setModule({ ...module, course: e.target.value }))
        }
      />{" "}
      <br />
      <textarea
        value={module.title}
        onChange={(e) =>
          dispatch(setModule({ ...module, title: e.target.value }))
        }
      />{" "}
      <br />
      <button
        className="btn btn-primary"
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
      >
        Add
      </button>
      <button
        className="btn btn-success"
        onClick={() => dispatch(updateModule(module))}
      >
        Update
      </button>
      <ul className="list-group wd-modules red-links">
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
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
                  <button
                    className="btn btn-success btn-sml"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sml"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
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
                              <Link to={`/Kanbas/Courses/#`}>
                                {lesson.text}
                              </Link>
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
