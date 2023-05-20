import React from "react";
import usePaidCourses from "../../hooks/usePaidCourses";
import { Container, Row } from "react-bootstrap";
import PaidCourse from "./Components/PaidCourse";

const PaidCourses = () => {
    const [paidCourses] = usePaidCourses();

    return (
        <Container className="text-center">
            <h3 className="m-0 pb-3 text-center">COURSES</h3>
            <Row className="py-2">
                {
                    paidCourses.map(paidCourse => <PaidCourse
                        key={paidCourse._id}
                        paidCourse={paidCourse}
                    ></PaidCourse>)
                }
            </Row>
        </Container>
    );
};

export default PaidCourses;