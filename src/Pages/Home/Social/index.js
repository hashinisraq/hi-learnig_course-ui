import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram, faLinkedin, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "react-bootstrap";

const words = ["#YOUTUBE", "#FACEBOOK", "#INSTAGRAM", "#DISCORD"];

const Social = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [erasing, setErasing] = useState(false);

    useEffect(() => {
        let intervalId = setInterval(() => {
            if (!erasing) {
                if (currentCharIndex < words[currentWordIndex].length) {
                    setCurrentCharIndex(currentCharIndex + 1);
                } else {
                    setErasing(true);
                }
            } else {
                if (currentCharIndex > 0) {
                    setCurrentCharIndex(currentCharIndex - 1);
                } else {
                    setErasing(false);
                    setCurrentWordIndex((currentWordIndex + 1) % words.length);
                }
            }
        }, 200);

        return () => clearInterval(intervalId);
    }, [currentCharIndex, currentWordIndex, erasing]);

    return (
        <>
            <h3 className="text-center">JOIN US ON</h3>
            <h5 className="text-dark text-center">{words[currentWordIndex].slice(0, currentCharIndex)}|</h5>
            <Container className="pb-3">
                <Row className="text-center py-3 gy-4">
                    <Col sm={12} md={4} lg={2}>
                        <a href="https://www.facebook.com/hashinisraq.hi" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faFacebook} className="pb-1" style={{ "color": "#0056eb", "fontSize": "40px" }} />
                        </a>
                        <h6>FACEBOOK</h6>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <a href="https://www.youtube.com/@hashinisraq" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faYoutube} style={{ "color": "red", "fontSize": "40px" }} />
                        </a>
                        <h6>YOUTUBE</h6>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <a href="https://www.instagram.com/hashinisraq" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faInstagram} style={{ "color": "red", "fontSize": "40px" }} />
                        </a>
                        <h6>INSTAGRAM</h6>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <a href="https://www.linkedin.com/in/hashinisraq" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faLinkedin} style={{ "color": "#0056eb", "fontSize": "40px" }} />
                        </a>
                        <h6>LINKEDIN</h6>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <a href="https://t.me/hashinisraq" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faTelegram} style={{ "color": "#1A8AD5", "fontSize": "40px" }} />
                        </a>
                        <h6>TELEGRAM</h6>
                    </Col>
                    <Col sm={12} md={4} lg={2}>
                        <a href="https://discordapp.com/users/hashinisraq#7792" target="_blank" rel="noreferrer" >
                            <FontAwesomeIcon icon={faDiscord} style={{ "color": "#5865F2", "fontSize": "40px" }} />
                        </a>
                        <h6>DISCORD</h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Social;