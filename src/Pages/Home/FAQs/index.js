import React from "react";
import { Accordion } from "react-bootstrap";

const FAQs = () => {
    return (
        <div>
            <h3 className="m-0 pb-3 text-center">FAQs</h3>
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
                    <Accordion.Header>How much much time will take to finish the courses?</Accordion.Header>
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
    );
};

export default FAQs;