import { faDiscord, faFacebook, faInstagram, faLinkedin, faTelegram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Logo from "./images/logo.png";

const Footer = () => {
    return (
        <div style={{ "backgroundColor": "#354154" }}>
            <Container>
                <a href="/home"><img src={Logo} alt="logo" className="ps-5 pt-5" srcSet="" width="160px" /></a>
                <Row className="px-5 pt-3 pb-5 gy-3">
                    <Col sm={12} md={6} lg={6} className="text-white">
                        <div>
                            <h6>Useful links</h6>
                            <b>
                                <a href="/home" style={{ textDecoration: "none", color: "white" }}><small>Home</small></a>
                                <br />
                                {/* <small>Blogs</small>
                                <br /> */}
                                <a href="/courses" style={{ textDecoration: "none", color: "white" }}><small>Courses</small></a>
                                <br />
                                <a href="/terms_conditions" style={{ textDecoration: "none", color: "white" }}><small>Terms & Conditions</small></a>
                                <br />
                            </b>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6} className="text-white">
                        <div>
                            <h6>Follow us</h6>
                            <div className="d-flex justify-content-start align-items-center">
                                <a href="https://www.facebook.com/hashinisraq.hi" target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon icon={faFacebook} className="pe-3" style={{ "color": "#0056eb", "fontSize": "25px" }} />
                                </a>
                                <a href="https://www.youtube.com/@hashinisraq" target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon icon={faYoutube} className="pe-3" style={{ "color": "red", "fontSize": "25px" }} />
                                </a>
                                <a href="https://www.instagram.com/hashinisraq" target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon icon={faInstagram} className="pe-3" style={{ "color": "red", "fontSize": "25px" }} />
                                </a>
                                <a href="https://www.linkedin.com/in/hashinisraq" target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon icon={faLinkedin} className="pe-3" style={{ "color": "#0056eb", "fontSize": "25px" }} />
                                </a>
                                <a href="https://t.me/hashinisraq" target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon icon={faTelegram} className="pe-3" style={{ "color": "#1A8AD5", "fontSize": "25px" }} />
                                </a>
                                <a href="https://discordapp.com/users/hashinisraq#7792" target="_blank" rel="noreferrer" >
                                    <FontAwesomeIcon icon={faDiscord} className="pe-3" style={{ "color": "#5865F2", "fontSize": "25px" }} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="text-white d-flex justify-content-center p-3">
                © HI-LEARNING COURSE 2023
            </div>
        </div>
    );
};

export default Footer;