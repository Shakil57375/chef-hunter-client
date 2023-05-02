import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path: '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/register',
            element : <Register></Register>
        },
        {
            path : '/blogs',
            element : <Blogs></Blogs>
        }
    ]
  },
]);
export default router