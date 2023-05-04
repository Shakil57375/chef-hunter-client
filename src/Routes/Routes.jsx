import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import RecipeDetails from "../Pages/RecipeDetails/RecipeDetails";
import PrivateRouter from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
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
        },
        {
            path : '/recipe/:id',
            element : <PrivateRouter><RecipeDetails></RecipeDetails></PrivateRouter>,
            loader : ({params}) => fetch(`https://assignment-ten-server-shakil57375.vercel.app/chefs/${params.id}`)
        }
    ]
  },
]);
export default router