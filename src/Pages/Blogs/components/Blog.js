import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
    const { title, author, details, banner, date } = blog;
    return (
        <>
            <Col sm={12} md={6} lg={4} className="px-0 mx-0">
                <Container>
                    <Card className="border" style={{ width: "auto", borderRadius: "20px", boxShadow: "1px 1px 1px darkgrey" }}>
                        <Link to={`/blogs/${title}`}>
                            <Card.Img variant="top" src={banner} style={{ width: "100%", height: "160px", borderRadius: "20px 20px 0 0" }} />
                        </Link>
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/blogs/${title}`}>
                                    <Button className="p-0" variant="light" style={{ fontSize: "25px" }}>{title}</Button>
                                </Link>
                            </Card.Title>
                            <Card.Text>
                                {details.slice(0, 70)}
                                <br />
                                <Link to={`/blogs/${title}`}>
                                    <Button className="p-0" variant="light" style={{ color: "red" }}>Read More... </Button>
                                </Link>
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-start align-items-center">
                                <span style={{ color: "red" }}>{author}</span> <span><span className="px-2"> - </span>{date}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>
        </>
    );
};

export default Blog;