import React from "react";
import { Button, Card, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import useAuth from "../../../hooks/useAuth";

const PaidCourse = ({ paidCourse }) => {
    const { title, img, lectures, quizes, contests, instructor } = paidCourse;

    const [users] = useUsers();
    const { user } = useAuth();
    const email = user.email;
    const selectedUser = users.filter(user => user.email === email);
    const enrolls = selectedUser[0]?.enroll;
    const enroll = enrolls?.filter(en => (en === title)) || "0";


    return (
        <>
            <Col className="mb-4" sm={12} md={6} lg={4}>
                <Card className="border" style={{ width: "auto", borderRadius: "20px", boxShadow: "1px 1px 1px darkgrey" }}>
                    <Card.Img variant="top" src={img} style={{ width: "100%", height: "160px", borderRadius: "20px 20px 0 0" }} />
                    <Card.Body className="text-center">
                        <Card.Title style={{ fontSize: "15px" }}>{title}<sup>
                            <small style={{ color: "red" }}>
                                <b> {instructor}</b>
                            </small>
                        </sup></Card.Title>
                        <Stack direction="horizontal" gap={3} className="mt-4 d-flex justify-content-between align-items-center">
                            <div style={{ color: "#4B5563", backgroundColor: "#F3F4F6", borderRadius: "5px" }} className="p-1">{lectures} Lectures</div>
                            {contests !== "0" ? <div style={{ color: "#4B5563", backgroundColor: "#F3F4F6", borderRadius: "5px" }} className="p-1">{contests} Contests</div> : <></>}
                            <div style={{ color: "#4B5563", backgroundColor: "#F3F4F6", borderRadius: "5px" }} className="p-1">{quizes} Quizes</div>
                        </Stack>
                        <Card.Text className="d-flex align-items-center justify-content-between pt-3">
                            <div>
                                {enroll[0] === title ? <Link to={`/paidCourses/${title}/lessons`}><Button variant="dark">Continue Course</Button></Link> : <Link to={`/addToCart/${title}`}><Button variant="dark">Enroll Now</Button></Link>}
                            </div>
                            <div>
                                <a href={`/course/${title}`}><Button variant="dark">Details</Button></a>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default PaidCourse;