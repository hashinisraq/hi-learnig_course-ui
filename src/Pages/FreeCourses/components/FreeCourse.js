import React from "react";
import { Button, Card, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const FreeCourse = ({ freeCourse }) => {
    const { title, image, lectures, instructor } = freeCourse;
    return (
        <>
            <Col className="mb-3" sm={12} md={6} lg={4}>
                <Card className="border" style={{ width: "auto", borderRadius: "20px", boxShadow: "1px 1px 1px darkgrey" }}>
                    <Card.Img variant="top" src={image} style={{ width: "100%", height: "160px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body className="text-center">
                        <Card.Title>
                            {title}<sup>
                                <small style={{ color: "red" }}>
                                    <b> {instructor}</b>
                                </small>
                            </sup>
                        </Card.Title>
                        <Stack direction="horizontal" gap={3} className="mt-4 d-flex justify-content-center align-items-center">
                            <div style={{ color: "#4B5563", backgroundColor: "#F3F4F6", borderRadius: "5px" }} className="p-1">{lectures} Lectures</div>
                        </Stack>
                        <Card.Text className="pt-3">
                            <div>
                                <Link to={`/freeCourses/${title}/youtubePlayer`}><Button variant="dark">Watch</Button></Link>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default FreeCourse;