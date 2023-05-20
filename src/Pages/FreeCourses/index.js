import React from "react";
import { Container, Row } from "react-bootstrap";
import useFreeCourses from "../../hooks/useFreeCourses";
import FreeCourse from "./components/FreeCourse";


const FreeCourses = () => {
    const [freeCourses] = useFreeCourses();

    return (
        <Container className="text-center">
            <h3 className="m-0 pb-3 text-center">ENJOY FREE CLASSES</h3>
            <Row className="py-2">
                {
                    freeCourses.map(freeCourse => <FreeCourse
                        key={freeCourse._id}
                        freeCourse={freeCourse}
                    ></FreeCourse>)
                }
            </Row>
        </Container>
    );
};

export default FreeCourses;