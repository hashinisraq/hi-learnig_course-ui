import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import AskDoubtImg from "./images/AskDoubtImg.gif";

const AskDoubt = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const issueRef = useRef();


    const handleOnSubmit = () => {
        let name = nameRef?.current.value;
        let email = emailRef?.current.value;
        let issue = issueRef?.current.value;

        if (name !== "" && email !== "" && issue !== "") {
            fetch('https://zeroneacademy-server.onrender.com/ask_doubt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ name, email, issue })
            })
                .then(res => res.json())
                .then(result => {
                })

            nameRef.current.value = "";
            emailRef.current.value = "";
            issueRef.current.value = "";

            alert('Successfully placed your issue. We will solve it to you soon!');
        }
        else {
            alert("Please complete all the fields carefully!");
        }

    }

    return (
        <>
            <Container className="text-dark pb-5">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <div className="text-center">
                            <img src={AskDoubtImg} width="80%" alt="helper" srcSet="" />
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={6}>
                        <h4 className="text-center">What's on your mind!</h4>
                        <Form className="row g-2 py-3">
                            <div className="col-12">
                                <label htmlFor="" className="form-label text-dark"> Your Name </label>
                                <input ref={nameRef} style={{ border: "none", borderBottom: "1px solid black" }} placeholder="Abcd Efgh" type="text" className="form-control" id="name" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className="form-label text-dark"> Email Address</label>
                                <input ref={emailRef} style={{ border: "none", borderBottom: "1px solid black" }} placeholder="abc@defg.hij" type="email" className="form-control" id="email" required />
                            </div>
                            <div className="col-12">
                                <label htmlFor="" className="form-label text-dark">Issue</label>
                                <textarea ref={issueRef} style={{ border: "none", borderBottom: "1px solid black" }} placeholder="Write your issue here..." type="text" className="form-control" id="issue" required />
                            </div>
                        </Form>
                        <div className="pb-5 text-center">
                            <Button variant="dark" onClick={e => {
                                e.preventDefault();
                                handleOnSubmit();
                            }}>Submit</Button>
                        </div>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default AskDoubt;