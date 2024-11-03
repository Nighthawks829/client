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
function App() {
  return <HomePage />;
}

export default App;
