import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./EditTaskPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  editTask,
  getTask,
  handleTaskChange,
} from "../../stores/task/taskSlice";
import { useNavigate, useParams } from "react-router";

function EditTaskPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { title, message, done, isLoading } = useSelector(
    (store) => store.task
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTask(id));
  }, []);

  const handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleTaskChange({ name, value }));
  };

  const toggleSwitch = () => {
    dispatch(handleTaskChange({ name: "done", value: !done }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(
      editTask({
        taskId: id,
        task: {
          title,
          message,
          done,
        },
      })
    ).unwrap();
    navigate("/");
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold">Edit Task</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-5 col-lg-7 col-12 mx-auto">
            <label htmlFor="title" className="form-label mb-2 fw-bold fs-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="form-control fs-6"
              required
              value={title}
              onChange={handleUserInput}
            />
          </div>

          <div className="mt-5 mb-4 col-lg-7 col-12 mx-auto">
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
              required
              value={message}
              onChange={handleUserInput}
            ></textarea>
          </div>

          <div className="my-3 col-lg-7 col-12 mx-auto">
            <label htmlFor="done" className="form-label mb-2 fw-bold fs-3">
              Done
            </label>
            <div>
              <label className="switch">
                <input
                  name="done"
                  id="done"
                  type="checkbox"
                  checked={done}
                  onChange={toggleSwitch}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <div className="mt-5 col-lg-6 col-12 mx-auto d-flex align-items-center justify-content-evenly">
            <button className="btn btn-primary shadow fs-4" type="submit">
              Edit Task
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

export default EditTaskPage;
