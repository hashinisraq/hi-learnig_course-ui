import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Helper from "./images/helper.gif";
import "./Home.css";
import Courses from "../Courses";
import FAQs from "./FAQs";
import { Link } from "react-router-dom";
import Advertising from "./Advertising";
import Social from "./Social";
import Blogs from "../Blogs";

const words = ["CODING?", "MATH!", "PHYSICS!"];

const Home = () => {
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
        <div>
            {/* Top part */}
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={6} className="d-flex justify-content-center align-items-center">
                        <div className="container py-3">
                            <h3 className="text-secondary" style={{ fontFamily: "times-new-roman" }}>
                                WANT TO LEARN
                            </h3>
                            <h3 className="text-dark" style={{ fontFamily: "times-new-roman" }}>
                                {words[currentWordIndex].slice(0, currentCharIndex)}|
                            </h3>
                            <Link to="/courses"><Button variant="dark">Explore</Button></Link>
                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={6} className="d-flex justify-content-center align-items-center"><img src={Helper} width="90%" alt="helper" srcSet="" /></Col>
                </Row>
            </Container>

            {/* Advertising part */}
            <Container className="pb-5">
                <Advertising />
            </Container>

            {/* Courses part */}
            <Container className="pb-5">
                <Courses />
            </Container>

            {/* Blogs part */}
            <Container className="pb-5">
                <Blogs />
            </Container>

            {/* Social part */}
            <Container className="pb-5">
                <Social />
            </Container>

            {/* FAQs part */}
            <Container className="pb-5">
                <FAQs />
            </Container>
        </div>
    );
};

export default Home;