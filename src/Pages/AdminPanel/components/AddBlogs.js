import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const AddBlogs = () => {
    const authorNameRef = useRef();
    const authorImageLinkRef = useRef();
    const topicNameRef = useRef();
    const bannerLinkRef = useRef();
    const detailsRef = useRef();
    const dateRef = useRef();

    const handleOnSubmit = e => {
        let author = authorNameRef?.current.value;
        let author_img = authorImageLinkRef?.current.value;
        let banner = bannerLinkRef?.current.value;
        let title = topicNameRef?.current.value;
        let details = detailsRef?.current.value;
        let date = dateRef?.current.value;


        if (author !== "" && author_img !== "" && title !== "" && banner !== "" && details !== "" && date !== "") {
            fetch('https://learningcourse-server.onrender.com/blogs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ title, author, author_img, details, banner, date })
            })
                .then(res => res.json())
                .then(result => {
                })

            alert(`${title} is added in blogs successfully!`)

            authorNameRef.current.value = "";
            authorImageLinkRef.current.value = "";
            topicNameRef.current.value = "";
            bannerLinkRef.current.value = "";
            detailsRef.current.value = "";
            dateRef.current.value = "";
        }
        else {
            alert("Please complete all the fields correctly!");
        }

        e.preventDefault();
    }


    return (
        <>
            <h3 className="text-center">Add Blogs</h3>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalAuthorName">
                    <Form.Label column sm={2}>
                        Author Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={authorNameRef} type="text" placeholder="Daniel Hotkins" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalAuthorImageLinkAddress">
                    <Form.Label column sm={2}>
                        Author Image Link
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={authorImageLinkRef} type="text" placeholder="https://imgbb.com (128x128)" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalBannerLinkAddress">
                    <Form.Label column sm={2}>
                        Banner Link
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={bannerLinkRef} type="text" placeholder="https://imgbb.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalTopicName">
                    <Form.Label column sm={2}>
                        Topic Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={topicNameRef} type="text" placeholder="Template String" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalDetailsName">
                    <Form.Label column sm={2}>
                        Details
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={detailsRef} type="text" as="textarea" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repudiandae!..." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalDate">
                    <Form.Label column sm={2}>
                        Date
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={dateRef} type="date" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col className="text-center" sm={{ span: 10, offset: 2 }}>
                        <Button className="bg-dark" onClick={handleOnSubmit}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
};

export default AddBlogs;