/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation(); 

    if (loading) {
        return <p className="text-center font-bold mt-10 text-2xl">Loading.....</p>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname} replace={true} />;
};

export default PrivateRoutes;
