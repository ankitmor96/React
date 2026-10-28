
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StudentPage from "./commponents/Student.jsx";
import StudentForm from "./commponents/StudentFrom.jsx";
import MainLayout from "./Routes/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <StudentPage />
      },
      {
        path: "add",
        element: <StudentForm />
      },
      {
        path: "edit/:id",
        element: <StudentForm />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
