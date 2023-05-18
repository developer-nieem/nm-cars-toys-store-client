import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Home from "../page/Home/Home/Home";
import Login from "../page/Profile/Login";
import Register from "../page/Profile/Register";
import Blog from "../page/Blog/Blog";
import AddToys from "../page/AddToys/AddToys";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/addtoys',
          element:<AddToys></AddToys>
        },
       
      ],
    },
  ]);
  
  export default router;
  