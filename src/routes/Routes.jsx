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
import PrivateRoutes from "./PrivateRoutes";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/job/:id',
                    element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
                    loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`)
                },
                {
                    path: "/add-job",
                    element: <PrivateRoutes><AddJobs></AddJobs></PrivateRoutes>
                },
                {
                    path: 'my-posted-jobs',
                    element: <PrivateRoutes><MyPostedJobs></MyPostedJobs></PrivateRoutes>
                },
                {
                    path : 'my-bids',
                    element : <MyBids></MyBids>
                },
                {
                    path : 'bid-request',
                    element : <BidRequests></BidRequests>
                },
                {
                    path : 'All-Jobs',
                    element : <PrivateRoutes><AllJobs></AllJobs></PrivateRoutes>
                },
            ]
        },
    ],
    {
        future: {
            v7_fetcherPersist: true,
        },
    }
);
