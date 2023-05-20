import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import "./style.css";
import Orders from "./components/Orders";
import Members from "./components/Members";
import AddFreeContent from "./components/AddFreeContent";
import ChangeRole from "./components/ChangeRole";
import AddBlogs from "./components/AddBlogs";
import AskDoubt from "./components/AskDoubt";
import AddPaidContent from "./components/AddPaidContent";

const AdminPanel = () => {
    return (
        <Container className="mb-4">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} lg={2}>
                        <Nav variant="pills" className="flex-column" >
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="first">
                                    Orders
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="second">
                                    Ask Doubt
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="third">
                                    Members
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="fourth">
                                    Add Free Content
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="fifth">
                                    Add Paid Content
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="sixth">
                                    Add Blogs
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="nav_link" eventKey="seventh">
                                    Change Role
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} lg={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Orders />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <AskDoubt />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Members />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <AddFreeContent />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <AddPaidContent />
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <AddBlogs />
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                                <ChangeRole />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default AdminPanel;