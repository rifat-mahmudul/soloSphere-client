import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Root />,
            children: [
                { path: "/", element: <Home /> },
                { path: "/login", element: <Login /> },
                { path: "/register", element: <Register /> },
            ],
        },
    ],
    {
        future: {
            v7_skipActionErrorRevalidation: true,
        },
    }
);


export default router;
