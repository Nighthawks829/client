import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { IoMdMore } from "react-icons/io";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../../stores/allTasks/allTasksSlice";
import { convertDateTime } from "../../utils/convertDateTime";
import { deleteTask } from "../../stores/task/taskSlice";
import Cookies from "js-cookie";

function HomePage() {
  const { tasks } = useSelector((store) => store.allTasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [deleteTaskId, setDeleteTaskId] = useState("");
  const [deleteTaskTitle, setDeleteTaskTitle] = useState("");

  const TruncateText = ({ text, limit }) => {
    return text.length > limit ? `${text.substring(0, limit)}...` : text;
  };

  // async function getTask(){
  //   const response =await
  // }
  // useEffect(() => {
  //   console.log("Hello World")
  //   getTask()
  // }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     const token = Cookies.get("token");
  //     console.log("Token in useEffect", token);
  //     dispatch(getAllTasks());
  //   }, 5000);
  //   // Wait for 5 seconds (5000 milliseconds) // Clean up the timer on component unmount
  //   return () => clearTimeout(timer);
  // }, [dispatch]);

  useEffect(()=>{
    dispatch(getAllTasks())
  },[])

  const AddButton = () => {
    return (
      <Link to={"/addtask"}>
        <div className="fixed-icon">
          <i className="fa-solid fa-circle-plus add-button text-success"></i>
        </div>
      </Link>
    );
  };

  function handleDelete() {
    dispatch(deleteTask(deleteTaskId));
    dispatch(getAllTasks());
  }

  function handleClick(taskid) {
    navigate(`/viewtask/${taskid}`);
  }

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="deleteTask"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteTaskLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body p-5 shadow">
              <h2 className="text-center mb-5">
                Are you sure want to delete {deleteTaskTitle}?
              </h2>
              <div className="d-flex align-items-center justify-content-evenly mt-5">
                <button
                  // className="modal-cancel-button shadow"
                  className="modal-button btn btn-danger shadow"
                  data-bs-dismiss="modal"
                  onClick={() => handleDelete()}
                >
                  Yes
                </button>
                <button
                  className="modal-button btn btn-success shadow"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h1 className="text-center fw-bold mb-5">To Do List</h1>
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <div
              className="card col-lg-6 col-md-9 col-11 mx-auto mb-4"
              key={task.id}
            >
              <div className="card-body p-0">
                <div className="d-flex align-items-center justify-content-between mb-3 pt-3 px-3 pb-0">
                  <h5 className="card-title m-0">{task.title}</h5>
                  <IoMdMore
                    size={25}
                    className="dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul className="dropdown-menu mt-3 py-3">
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/edittask/${task.id}`}
                      >
                        Edit
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteTask"
                        onClick={() => {
                          setDeleteTaskTitle(task.title);
                          setDeleteTaskId(task.id);
                        }}
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
                <hr className="m-0" />

                <div
                  onClick={() => handleClick(task.id)}
                  className="card-hover pt-3 px-3 pb-3"
                >
                  <p className="card-text">
                    {task.message ? (
                      <TruncateText text={task.message} limit={100} />
                    ) : (
                      ""
                    )}
                  </p>
                  <div className="d-flex align-items-center mb-2">
                    <i className="fa-regular fa-clock text-secondary"></i>
                    {task.createdAt ? (
                      <p className="date-text text-secondary mb-0 ms-2">
                        Created At: {convertDateTime(task.createdAt)}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    <i className="fa-solid fa-clock-rotate-left text-secondary"></i>
                    {task.updatedAt ? (
                      <p className="date-text text-secondary mb-0 ms-2">
                        Updated At: {convertDateTime(task.updatedAt)}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h4 className="text-center">Empty Tasks. Try adding something.</h4>
        )}
      </div>
      <AddButton />
    </>
  );
}

export default HomePage;
