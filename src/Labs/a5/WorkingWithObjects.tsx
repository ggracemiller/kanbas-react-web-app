import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  const [module, setModule] = useState({
    _id: "MATH1234",
    name: "Week 0 - INTRO",
    course: "MATH1234",
    description: "First Week Introduction",
  });
  const MODULE_URL = `${API_BASE}/a5/module`;

  return (
    <div>
      <h3>Working With Objects</h3>

      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <button className="btn btn-primary" onClick={updateTitle}>
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-success" onClick={fetchAssignment}>
        Fetch Assignment
      </button>

      <h4>Modifying Module Properties</h4>
      <input
        className="form-control"
        type="text"
        onChange={(e) => setModule({ ...module, name: e.target.value })}
        value={module.name}
      />
      <a className="btn btn-success" href={`${MODULE_URL}/name/${module.name}`}>
        Update Name
      </a>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={MODULE_URL}>
        Get Module
      </a>
      <h4>Modifying Assignment Properties</h4>
      <input
        className="form-control"
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <a
        className="btn btn-success"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <label className="form-control">
        Completed
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={() =>
            setAssignment({ ...assignment, completed: !assignment.completed })
          }
        />
      </label>
      <a
        className="btn btn-success"
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <label className="form-control">
        Score
        <input
          type="number"
          onChange={(e) =>
            setAssignment({ ...assignment, score: parseInt(e.target.value) })
          }
        />
      </label>
      <a
        className="btn btn-success"
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary" href={`${API_BASE}/a5/assignment`}>
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/assignment/title`}
      >
        Get Title
      </a>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/assignment/completed`}
      >
        Get Completed
      </a>
      <a
        className="btn btn-primary"
        href={`${API_BASE}/a5/assignment/score`}
      >
        Get Score
      </a>
    </div>
  );
}
export default WorkingWithObjects;
