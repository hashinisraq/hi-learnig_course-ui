import React from "react";

const AddPaidContent = () => {
    // const courseNameRef = useRef();
    // const topicNameRef = useRef();
    // const videoLinkRef = useRef();


    // const handleOnSubmit = e => {
    //     // let course = courseNameRef?.current.value;
    //     // let topic = topicNameRef?.current.value;
    //     // let video = videoLinkRef?.current.value;

    //     // if (course !== "" && topic !== "" && video !== "") {
    //     //     if (course === "PROGRAMMING LANGUAGE I") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/programming_language_I', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else if (course === "PROGRAMMING LANGUAGE II") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/programming_language_II', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else if (course === "DATA STRUCTURES") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/data_structure', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else if (course === "MATHEMATICS I: DIFFERENTIAL CALCULUS & COORDINATE GEOMETRY") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/mathematics_I', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else if (course === "RECURSION IN PYTHON") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/recursion_in_python', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else if (course === "GRAPH IN PYTHON") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/graph_in_python', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else if (course === "QUEUE IN PYTHON") {
    //     //         fetch('https://zeroneacademy-server.onrender.com/queue_in_python', {
    //     //             method: 'POST',
    //     //             headers: {
    //     //                 'content-type': 'application/json'
    //     //             },
    //     //             body: JSON.stringify({ topic, video })
    //     //         })
    //     //             .then(res => res.json())
    //     //             .then(result => {
    //     //             })
    //     //         alert(`${topic} is added in ${course} successfully!`);
    //     //     }
    //     //     else {
    //     //         alert("Error in adding contents");
    //     //     }

    //     //     courseNameRef.current.value = "";
    //     //     topicNameRef.current.value = "";
    //     //     videoLinkRef.current.value = "";
    //     // }
    //     // else {
    //     //     alert("Please complete all the fields correctly!");
    //     // }

    //     e.preventDefault();
    // }

    return (
        <>
            <h3 className="text-center">Add Paid Content</h3>
            {/* <Form>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCourseName">
                    <Form.Label column sm={2}>
                        Course Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={courseNameRef} type="text" placeholder="C Programming" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalGameName">
                    <Form.Label column sm={2}>
                        Game No
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={topicNameRef} type="text" placeholder="01. Introduction to programming" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalGameName">
                    <Form.Label column sm={2}>
                        Game Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={topicNameRef} type="text" placeholder="01. Introduction to programming" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalVideoID">
                    <Form.Label column sm={2}>
                        Video ID
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={videoLinkRef} type="text" placeholder="https://src.video.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col className="text-center" sm={{ span: 10, offset: 2 }}>
                        <Button className="bg-dark" onClick={handleOnSubmit}>Submit</Button>
                    </Col>
                </Form.Group>
            </Form> */}
        </>
    );
};

export default AddPaidContent;