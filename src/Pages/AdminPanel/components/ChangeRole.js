import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ChangeRole = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const emailRef = useRef();
    const phoneRef = useRef();

    const handleOnSubmit = e => {
        let email = emailRef?.current.value;
        let phone = phoneRef?.current.value;
        let role = selectedRole;

        if (email !== "" && phone !== "" && role !== "") {
            const user = { email, role };
            fetch('https://zeroneacademy-server.onrender.com/users', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                })

            updateUserPhone(email, phone);

            emailRef.current.value = "";
            phoneRef.current.value = "";
            alert(`${email} is set as ${role} successfully!`);
        }
        else {
            alert("Please complete all the fields correctly!");
        }

        e.preventDefault();
    }

    const updateUserPhone = (email, phone) => {
        const user = { email, phone };

        fetch('https://zeroneacademy-server.onrender.com/users_phone', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return (
        <>
            <h3 className="text-center">Change Role</h3>

            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmailAddress">
                    <Form.Label column sm={2}>
                        Email Address
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={emailRef} type="email" placeholder="abc@yz.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontaPhoneNo">
                    <Form.Label column sm={2}>
                        Phone No
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={phoneRef} type="number" placeholder="01111111111" />
                    </Col>
                </Form.Group>

                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Role
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                type="radio"
                                label="admin"
                                name="role"
                                id="formHorizontalRadios1"
                                checked={selectedRole === 'admin'}
                                onChange={() => setSelectedRole('admin')}
                            />
                            {/* <Form.Check
                                type="radio"
                                label="member"
                                name="role"
                                id="formHorizontalRadios3"
                                checked={selectedRole === 'member'}
                                onChange={() => setSelectedRole('member')}
                            /> */}
                        </Col>
                    </Form.Group>
                </fieldset>


                <Form.Group as={Row} className="mb-3">
                    <Col className="text-center" sm={{ span: 10, offset: 2 }}>
                        <Button className="bg-dark submit" onClick={handleOnSubmit}>Confirm</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};

export default ChangeRole;