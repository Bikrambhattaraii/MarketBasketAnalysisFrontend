import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import SignUp from './pages/signUp';
import LandingPage from './pages/LandingPage';
import GuestLayout from './layouts/GuestLayout';
import UserLayout from './layouts/UserLayout';
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
    path:'/home',
    element: <UserLayout />,
    children:[
        {
            path:'dashboard',
            element:<Home />
        }
    ]
  }
]);
export default router;