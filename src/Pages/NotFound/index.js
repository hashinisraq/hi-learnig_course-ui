import React from "react";
import { Button, Card, Col, Nav, Row } from "react-bootstrap";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <Row xs={1} md={1} className="g-4">
                {
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Text>
                                    <h2>404</h2>
                                    <h3>Page Not Found</h3>
                                    <p>The resourse requested could not be found on this server</p>
                                    <Button variant="secondary"><Nav.Link className="home-btn" href="/home">Go Home</Nav.Link></Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                }
            </Row>
        </div>
    );
};

export default NotFound;