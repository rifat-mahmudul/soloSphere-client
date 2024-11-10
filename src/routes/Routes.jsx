import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";

export const router = createBrowserRouter(
    [
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
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
                path : '/job/:id',
                element : <JobDetails></JobDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
            },
        ]
    },
]);