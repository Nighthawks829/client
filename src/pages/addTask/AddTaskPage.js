import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./AddTaskPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../stores/task/taskSlice";
import { useNavigate } from "react-router";
function AddTaskPage() {
  const { user } = useSelector((store) => store.auth);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(addTask({ title, message })).unwrap();
    navigate("/");
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold">Add New Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5 col-lg-7 col-12 mx-auto">
            <label htmlFor="title" className="form-label mb-2 fw-bold fs-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="form-control fs-6"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="my-5 col-lg-7 col-12 mx-auto">
            <label
              htmlFor="description"
              className="form-label mb-2 fw-bold fs-3"
            >
              Description
            </label>
            <textarea
              name="message"
              id="message"
              className="description-textarea form-control mb-2 fs-6"
              rows={8}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="col-lg-6 col-12 mx-auto d-flex align-items-center justify-content-evenly">
            <button className="btn btn-primary shadow fs-4" type="submit">
              Add Task
            </button>
            <button className="btn btn-danger shadow fs-4" type="reset">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTaskPage;
