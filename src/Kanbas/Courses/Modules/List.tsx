import React, { useEffect, useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";
import { ModulesType } from "./reducer";

function List() {
  const { courseId } = useParams();
  const [courseIdString, setCourseIdString] = useState<any>("");
  const moduleList = useSelector(
    (state: KanbasState) => [state.modulesReducer.module]
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const [allModules, setAllModules] = useState<ModulesType>();
  const dispatch = useDispatch();
  console.log(moduleList)
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  useEffect(() => {
    client.findCourseId(courseId).then(
      (course) => {
        setCourseIdString(course.courseId);
        console.log(course.courseId);
        console.log(courseIdString);
        client.findModulesForCourse(course.courseId).then(
          (modules) => {
            dispatch(setModules(modules));
            setAllModules(modules);
            console.log(moduleList);
            console.log(allModules);
          }
        );
      }
      
    );
    // client
    //   .findModulesForCourse(courseId)
    //   .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);

  const handleAddModule = () => {
    client.createModule(courseIdString, module).then((module) => {
      console.log(module);
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    /*const status = */ await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
      <button className="btn btn-primary" onClick={handleAddModule}>
        Add
      </button>
      <button className="btn btn-success" onClick={handleUpdateModule}>
        Update
      </button>
      <ul className="list-group wd-modules red-links">
        {allModules
          .filter((module) => module.course === courseIdString)
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
                    onClick={() => handleDeleteModule(module._id)}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule && selectedModule?._id === module._id && (
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
