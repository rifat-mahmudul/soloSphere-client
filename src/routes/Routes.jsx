import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJobs from "../components/AddJobs";
import MyPostedJobs from "../pages/MyPostedJobs";

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
            {
                path : "/add-job",
                element : <AddJobs></AddJobs>
            },
            {
                path :'my-posted-jobs',
                element : <MyPostedJobs></MyPostedJobs>
            }
        ]
    },
]);