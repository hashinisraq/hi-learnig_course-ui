import React, { useState } from "react";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useOrders from "../../hooks/useOrders";
import { useParams } from "react-router-dom";
import usePaidCourses from "../../hooks/usePaidCourses";
import { Button, Col, Form, Row } from "react-bootstrap";

const Cart = () => {
    const courseTitle = useParams();

    const [selectedOption, setSelectedOption] = useState("");
    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const [paidCourses] = usePaidCourses();
    const selectedPaidCourse = paidCourses.filter(paidCourse => paidCourse.title === courseTitle.courseTitle);

    const [orders] = useOrders();
    const { user } = useAuth();
    const selectedOrders = orders.filter(order => order.email === user.email);
    const checkUser = selectedOrders.filter(so => so.course === courseTitle.courseTitle);
    const checkedCourse = checkUser[0]?.course;
    const checkedStatus = checkUser[0]?.status;


    const phoneRef = useRef();
    const TxIdRef = useRef();

    const { displayName, email } = user;
    const course = courseTitle.courseTitle;
    const price = selectedPaidCourse[0]?.price;

    let batchNo;
    if (course === "PROGRAMMING LANGUAGE I") {
        batchNo = "PLI-01";
    }
    else if (course === "PROGRAMMING LANGUAGE II") {
        batchNo = "PLII-01";
    }
    else if (course === "DATA STRUCTURES") {
        batchNo = "DT-01";
    }
    else if (course === "MATHEMATICS I: DIFFERENTIAL CALCULUS & COORDINATE GEOMETRY") {
        batchNo = "MI-01";
    }

    const handleBooking = () => {
        let phone = phoneRef?.current.value;
        let payment = selectedOption;
        let TxId = TxIdRef?.current.value;
        let status = "";


        if (phone !== "" && TxId !== "" && payment !== "") {
            fetch('https://zeroneacademy-server.onrender.com/orders', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ displayName, email, course, price, phone, payment, TxId, batchNo, status })
            })
                .then(res => res.json())
                .then(result => {
                })
            phoneRef.current.value = "";
            TxIdRef.current.value = "";
            alert('Successfully placed your order. We will confrim you soon!');
        }
        else {
            alert("Please complete all the fields carefully!");
        }

    }

    return (
        <div>
            {(checkedCourse !== course) || (checkedStatus === "cancelled") ? <div style={{ padding: "80px" }}>
                <h3 style={{ textAlign: "center", color: "black" }}><u>Purchase Confirmation</u></h3>
                <div className="text-danger pb-4 d-flex text-align-center justify-content-center">
                    <h6 className="p-3 m-2" style={{ border: "1px solid red" }}>💰 Payment: Bkash (personal)
                        <br />
                        📱 Mobile Number: 01777777777
                    </h6>
                    <h6 className="p-3 m-2" style={{ border: "1px solid red" }}>💰 Payment: Nagad (personal)
                        <br />
                        📱 Mobile Number: 01777777777
                    </h6>
                    <h6 className="p-3 m-2" style={{ border: "1px solid red" }}>💰 Payment: Rocket (personal)
                        <br />
                        📱 Mobile Number: 01777777777
                    </h6>
                </div>

                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalUserName">
                        <Form.Label column sm={2}>
                            Your Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" defaultValue={user.displayName} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmailAddress">
                        <Form.Label column sm={2}>
                            Email Address
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" defaultValue={user.email} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCourseName">
                        <Form.Label column sm={2}>
                            Course Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" defaultValue={courseTitle.courseTitle} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
                        <Form.Label column sm={2}>
                            Price
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" defaultValue={selectedPaidCourse[0]?.price} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPhoneNumber">
                        <Form.Label column sm={2}>
                            Phone Number
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={phoneRef} type="number" placeholder="01777777777" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalMethod">
                        <Form.Label column sm={2}>Payment Method:</Form.Label>
                        <Col sm={10}>
                            <div className="radio-container">
                                <Form.Check
                                    type="radio"
                                    label="bKash"
                                    value="bkash"
                                    checked={selectedOption === "bkash"}
                                    onChange={handleRadioChange}
                                    name="paymentMethod"
                                    className="radio"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Rocket"
                                    value="rocket"
                                    checked={selectedOption === "rocket"}
                                    onChange={handleRadioChange}
                                    name="paymentMethod"
                                    className="radio"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Nagad"
                                    value="nagad"
                                    checked={selectedOption === "nagad"}
                                    onChange={handleRadioChange}
                                    name="paymentMethod"
                                    className="radio"
                                />
                            </div>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalTxID">
                        <Form.Label column sm={2}>
                            Transaction ID
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control ref={TxIdRef} type="text" placeholder="TxID2023" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalBatchNo">
                        <Form.Label column sm={2}>
                            Batch
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" defaultValue={batchNo} disabled />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Col className="text-center" sm={{ span: 10, offset: 2 }}>
                            <Button className="bg-dark" onClick={e => {
                                e.preventDefault();
                                handleBooking();
                            }}>Confirm Order</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div> : <div className="d-flex text-align-center justify-content-center" style={{ padding: "80px", height: "69vh" }}><span><h4>You have already submitted your order.</h4>
                <h4 style={{ textAlign: "center" }}>We will confirm you soon. Thank You!</h4></span></div>}
        </div>
    );
};

export default Cart;