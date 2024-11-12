// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import UserProfile from "./pages/userProfile/UserProfile";
import EditUserProfile from "./pages/editUserrofile/EditUserProfile";
import AddTaskPage from "./pages/addTask/AddTaskPage";
import EditTaskPage from "./pages/editTask/EditTaskPage";
import ViewTaskDetailPage from "./pages/viewTask/ViewTaskDetailPage";
import HomeLayout from "./pages/layout/HomeLayout";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { loggedIn } = useSelector((store) => store.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={loggedIn ? <HomeLayout /> : <Navigate to="/login" />}
        >
          <Route index element={<HomePage />} />
          <Route path="addtask" element={<AddTaskPage />} />
          <Route path="edittask" element={<EditTaskPage />} />
          <Route path="viewtask" element={<ViewTaskDetailPage />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="edituserprofile" element={<EditUserProfile />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose="5000"
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </BrowserRouter>
  );
}

export default App;
