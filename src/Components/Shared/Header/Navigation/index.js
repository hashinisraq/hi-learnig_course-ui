import React from "react";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import useFirebase from "../../../../hooks/useFirebase";
import Logo from "../images/logo.png";
import useUsers from "../../../../hooks/useUsers";

const Navigation = () => {
    const { user, logOut } = useFirebase();
    const datas = useUsers();
    const selectedUser = datas[0].filter(data => data.email === user.email);
    const role = selectedUser[0]?.role;

    return (
        <div className="bg-white shadow p-3 mb-5 bg-white rounded sticky-top">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <NavbarBrand href="/home"><img src={Logo} alt="logo" srcSet="" width="80px" /></NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/blog" className="text-dark"><b>Blog</b></Nav.Link> */}
                        </Nav>
                        <Nav style={{ fontFamily: "times-new-roman", fontSize: "20px", fontWeight: "lighter" }}>
                            <Nav.Link href="/blogs" className="text-dark"><b>Blogs</b></Nav.Link>
                            <Nav.Link href="/courses" className="text-dark"><b>Courses</b></Nav.Link>
                            <Nav.Link href="/ask_doubt" className="text-dark"><b>Ask Doubt</b></Nav.Link>
                            <span className="d-flex">
                                {user.email ? <><Navbar.Text className="text-dark px-3">👤 {user?.displayName} </Navbar.Text><Nav.Link onClick={logOut} variant="secondary" className="text-dark">Logout</Nav.Link></> : <Nav.Link href="/login" className="text-dark">Login</Nav.Link>}
                            </span>
                            {role === "admin" ? <Nav.Link href="/admin_panel" className="text-dark me-4"><b>Admin Panel</b></Nav.Link> : <></>}
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;