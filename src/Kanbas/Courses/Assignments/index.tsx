import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaPlus } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const categories = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      <span className="module-buttons">
        <input
          type="text"
          id="text-fields-last-name"
          placeholder="Search for Assignments"
        />

        <button className="btn btn-outline-secondary" type="button"><FaPlus /> Group</button>
        <button className="btn btn-danger" type="button"><FaPlus /> Assignment</button>

        <select className="select-button" id="select-one-assignments">
          <option value="edit-dates">Edit Assignment Dates</option>
        </select>
      </span>
      <ul className="list-group wd-modules">
        {categories.map((category, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => setSelectedCategory(category)}
          >
            <div>
              <FaEllipsisV className="me-2" /> {category.title}{" "}
              {category.percent}% of Total
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedCategory._id === category._id && (
              <ul className="list-group">
                {category.sections.map((section) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    <Link
                      to={`/Kanbas/Courses/${courseId}/Assignments/${section._id}`}
                    >
                      {section.title}
                    </Link>
                    <br></br>
                    {section.multiple_modules && "Multiple Modules | "}{" "}
                    {!section.available &&
                      "Not available until " +
                        section.not_available_until +
                        " | "}{" "}
                    Due: {section.due} | {section.points} pts
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    <ul></ul>
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
export default Assignments;
