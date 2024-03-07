import { createBrowserRouter } from "react-router-dom";

//component pages
import Profile from "./pages/Profile";
import Analyze from "./pages/Analyze";
import DataUpload from "./pages/DataUpload";
import Energy from "./pages/Energy";
import Result from "./pages/Result";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/signUp";

//independent landing page
import LandingPage from "./pages/LandingPage";

//parent layouts
import GuestLayout from "./layouts/GuestLayout";
import UserLayout from "./layouts/UserLayout";
//router paths
const router = createBrowserRouter([
  //independent page
  {
    path: "/",
    element: <LandingPage />,
  },

  //guest
  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
      {
        path: "/guest",
        element: <Login />,
      },
    ],
  },

  //user
  {
    path: "/home",
    element: <UserLayout />,
    children: [
      {
        path: "dashboard",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "analyze",
        element: <Analyze />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "energy",
        element: <Energy />,
      },
      {
        path: "upload",
        element: <DataUpload />,
      },
    ],
  },
]);
export default router;
