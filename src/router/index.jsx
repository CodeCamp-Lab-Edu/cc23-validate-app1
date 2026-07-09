import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>My App</h1>,
  },
  {
    path: "/login",
    Component: LoginPage
  },
  {
    path: "/signup",
    Component: SignupPage
  }
]);

export default router;
