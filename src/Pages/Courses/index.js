import React from "react";
import { Container } from "react-bootstrap";
import PaidCourses from "../PaidCourses";
import FreeCourses from "../FreeCourses";


const Courses = () => {

    return (
        <Container className="text-center">
            <PaidCourses />
            <FreeCourses />
        </Container>
    );
};

export default Courses;