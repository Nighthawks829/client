import React, { useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./ViewTaskDetailPage.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../stores/task/taskSlice";
import { convertDateTime } from "../../utils/convertDateTime";

function ViewTaskDetailPage() {
  const { id } = useParams();
  const { title, message, done, createdAt, updatedAt, isLoading } = useSelector(
    (store) => store.task
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask(id));
    // console.log(convertDateTime(createdAt));
  }, []);

  if (isLoading) {
    <h1>Please wait</h1>;
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bold">View Task Detail</h1>
        <div className="my-5 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Title</h5>
          <h5 className="fs-3">{title}</h5>
        </div>
        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Description</h5>
          <h5 className="fs-5">
            {message}
            {/* Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. */}
          </h5>
        </div>

        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3  ">Done</h5>
          {done ? (
            <h5 className="fs-5 text-success">Yes</h5>
          ) : (
            <h5 className="fs-5 text-danger">No</h5>
          )}
        </div>

        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Created At</h5>
          {createdAt ? (
            <h5 className="fs-5">{convertDateTime(createdAt)}</h5>
          ) : (
            ""
          )}
        </div>

        <div className="my-3 col-lg-7 col-12 mx-auto">
          <h5 className="mb-3 fw-bold fs-3">Edited At</h5>
          {/* <h5 className="fs-5">{convertDateTime(updatedAt)}</h5> */}
          {updatedAt ? (
            <h5 className="fs-5">{convertDateTime(updatedAt)}</h5>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default ViewTaskDetailPage;
