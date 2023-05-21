import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faVideo, faHandPeace } from "@fortawesome/free-solid-svg-icons";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
import useAuth from "../../../hooks/useAuth";

const CourseDetails = () => {
    const courseTitle = useParams();

    // Enroll check
    const [users] = useUsers();
    const { user } = useAuth();
    const email = user.email;
    const selectedUser = users.filter(user => user.email === email);
    const enrolls = selectedUser[0]?.enroll;
    const enroll = enrolls?.filter(en => (en === courseTitle.courseTitle)) || "0";


    return (
        <Container>
            <h3 className="m-0 pb-5 text-center">{courseTitle.courseTitle}</h3>
            <Row>
                <Col sm={12} md={8} lg={8}>
                    <div className="pb-5">
                        <h4 className="pb-2">Course Instructor</h4>
                        <Container className="d-flex align-items-center justify-content-start border rounded p-3">
                            <div>
                                <img src="https://i.ibb.co/bHX1stY/formal.jpg" alt="instructor" width="80px" height="85px" style={{ borderRadius: "50%" }} />
                            </div>
                            <div className="ps-3">
                                BSc (EEE)<br />
                                Ahsanullah University of Science and Technology (BD)
                            </div>
                        </Container>
                    </div>
                    <div className="pb-5">
                        <h4 className="pb-2">Course Outcome</h4>
                        <Container className="border rounded py-2">
                            <Row className="gy-3">
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ HTML
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ CSS
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ JAVASCRIPT
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ REACT
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ NODE-JS
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ EXPRESS
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ MONGODB
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    ✔️ BOOTSTRAP, TAILWIND CSS & MATERIAL UI
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="pb-5">
                        <h4 className="pb-2">Course Outline</h4>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Is there life time access?</Accordion.Header>
                                <Accordion.Body>
                                    Yes. Once you enroll in any of the courses, you will have life time access.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How can I get class video?</Accordion.Header>
                                <Accordion.Body>
                                    You will get class vidoe in the website lesson segment. After enrolling in any course, you'll need to go to your course dashboard to see all the class video.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How much time will take to finish the courses?</Accordion.Header>
                                <Accordion.Body>
                                    It depends on how you utilize your time to the courses.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is the way to get support?</Accordion.Header>
                                <Accordion.Body>
                                    Every course will have their individual discord group to give support and conceptual session will be held to solve  everyone's problem.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Is there any refund option?</Accordion.Header>
                                <Accordion.Body>
                                    No, there is no refund option after enrolling the course.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className="pb-5">
                        <h4 className="pb-2">How To Pay</h4>
                        <Container className="m-0 p-0 text-center">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/E7hQ7AoF-8o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </Container>
                    </div>
                    <div className="pb-5">
                        <h4 className="pb-2">FAQs</h4>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Is there life time access?</Accordion.Header>
                                <Accordion.Body>
                                    Yes. Once you enroll in any of the courses, you will have life time access.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>How can I get class video?</Accordion.Header>
                                <Accordion.Body>
                                    You will get class vidoe in the website lesson segment. After enrolling in any course, you'll need to go to your course dashboard to see all the class video.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How much time will take to finish the courses?</Accordion.Header>
                                <Accordion.Body>
                                    It depends on how you utilize your time to the courses.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>What is the way to get support?</Accordion.Header>
                                <Accordion.Body>
                                    Every course will have their individual discord group to give support and conceptual session will be held to solve  everyone's problem.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Is there any refund option?</Accordion.Header>
                                <Accordion.Body>
                                    No, there is no refund option after enrolling the course.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} className="text-center pb-5">
                    <Container className="border rounded p-0 m-0">
                        <iframe variant="top" style={{ borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }} width="100%" height="205" src="https://www.youtube.com/embed/E7hQ7AoF-8o" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        <h5 className="ps-4 py-3">Bdt 499</h5>
                        <div className="text-center">
                            {enroll[0] === courseTitle.courseTitle ? <Link to={`/paidCourses/${courseTitle.courseTitle}/lessons`}><Button variant="dark">Continue Course</Button></Link> : <Link to={`/addToCart/${courseTitle.courseTitle}`}><Button variant="dark">Enroll Now</Button></Link>}
                        </div>

                        <div className="ps-4 py-4">
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faVideo} className="pb-3 pe-2" style={{ "fontSize": "20px" }} /> <small>24 Videos</small>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faQuestionCircle} className="pb-3 pe-2" style={{ "fontSize": "20px" }} /> <small>8 Quiz</small>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faHandPeace} className="pb-3 pe-2" style={{ "fontSize": "20px" }} /> <small>6 Contest</small>
                            </div>
                        </div>

                    </Container>

                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;