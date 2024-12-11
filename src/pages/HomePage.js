import React from "react";
import "../css/HomePage.css"; // Add custom styles here if needed
import taskManagerImage from "../images/taskmanager.jpg";
import { Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <div className="home-page container mt-5">
      <Row>
        <Col
          lg={10}
          className="d-flex justify-content-center"
        >
          <h1 className="text-center">Welcome to Task Manager</h1>
        </Col>
      </Row>
      <Row className="align-items-center mb-5 d-flex box-fit">
      <Col lg={6} className="box-fit">
          <img
            src={taskManagerImage}
            alt="Task Management Illustration"
            className=""
          />
        </Col>

        <Col lg={6} className="col-6">
          <p>
            The Task Manager helps you stay organized and keep track of your
            tasks. You can add tasks with a title, description, and due date,
            view a list of all tasks, edit existing tasks, and delete tasks when
            they are no longer needed.
          </p>
        </Col>
        
      </Row>

      {/* How to Use Section */}
      <Row>
        <Col className="d-flex justify-content-center">
          
          <ol>
          <h2>How to Use:</h2>
            <li>
              Go to <strong>Add Task</strong> to create a new task. Provide a
              title, description, and due date, then click the "Add Task"
              button.
            </li>
            <li>
              Navigate to <strong>List Tasks</strong> to view all your tasks.
              You can edit or delete tasks from here.
            </li>
            <li>
              Use the <strong>Edit</strong> button to modify a task's details or
              the 
               <strong> Delete</strong> button to remove a task.
            </li>
          </ol>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
