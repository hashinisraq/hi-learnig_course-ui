import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import { Spinner } from "react-bootstrap";
import useUsers from "../../../hooks/useUsers";

const AdminRoute = ({ children, ...rest }) => {
    const [users] = useUsers();
    const { user, isLoading } = useAuth();
    const selectedUser = users.filter(usr => usr.email === user.email)
    const role = selectedUser[0]?.role;

    let location = useLocation();

    if (isLoading) { return <div className="d-flex justify-content-center align-items-center"><Spinner animation="border" variant="dark" /></div> }
    if (user.email && role === "admin") {
        return children;
    }
    else { <Navigate to="/" state={{ from: location }} /> }
};

export default AdminRoute;