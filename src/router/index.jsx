import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>My App</h1>,
  },
  {
    path: "/login",
    Component: LoginPage
  }
]);

export default router;
