import React from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Login = () => {
    const { signInUsingGooogle } = useAuth();

    const location = useLocation();
    const history = useNavigate();

    const handleGoogleSignIn = () => {
        history(location.state?.from || '/home');
    }

    return (
        <div style={{ padding: "80px", textAlign: "center", height: "69vh" }} className="d-flex justify-content-center align-items-center">
            <span>
                <h3 style={{ paddingBottom: "10px" }}>Please Login</h3>
                <Button
                    onClick={() => {
                        signInUsingGooogle();
                        handleGoogleSignIn();
                    }}
                    variant="secondary">Google Sign In</Button>
            </span>
        </div>
    );
};

export default Login;