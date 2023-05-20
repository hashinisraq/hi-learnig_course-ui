import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import usePaidCourses from "../../../hooks/usePaidCourses";

const Advertising = () => {
    const [paidCourses] = usePaidCourses();

    return (
        <div className="pb-4">
            <h3 className="m-0 pb-3 text-center">What's New on HI-LEARNING COURSE</h3>
            <Carousel>
                {paidCourses.map(paidCourse => <Carousel.Item key={paidCourse._id} interval={2000}>
                    <div className="d-flex align-items-center justify-content-around">
                        <div className="card">
                            {/* <div className="card" style={{ "width": "25rem" }}> */}
                            <Link to="/home"><img src={paidCourse.img} style={{ "width": "750px", "height": "400px" }} className="card-img-top" alt="..." /></Link>
                        </div>
                    </div>
                </Carousel.Item>)
                }
                {/* <Carousel.Item interval={2000}>
                    <div className="d-flex align-items-center justify-content-around">
                        <div className="card" style={{ "width": "25rem" }}>
                            <Link to="/home"><img src="https://i.pinimg.com/736x/49/2d/d4/492dd4c48438c7e79016f3819f35393d.jpg" className="card-img-top" alt="..." /></Link>
                        </div>
                        <div className="card" style={{ "width": "25rem" }}>
                            <Link to="/home"><img src="https://www.classcentral.com/report/wp-content/uploads/2019/04/banner-social-tracker-new-courses.png" className="card-img-top" alt="..." /></Link>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <div className="d-flex align-items-center justify-content-around">
                        <div className="card" style={{ "width": "25rem" }}>
                            <Link to="/home"><img src="https://i.ytimg.com/vi/iXXhhr1QNXM/maxresdefault.jpg" className="card-img-top" alt="..." /></Link>
                        </div>
                        <div className="card" style={{ "width": "25rem" }}>
                            <Link to="/home"><img src="https://grafenwoehr.armymwr.com/application/files/7315/8521/7568/Web-Graphic-Online-Courses.jpg" className="card-img-top" alt="..." /></Link>
                        </div>
                    </div>
                </Carousel.Item> */}
            </Carousel>
        </div>
    );
};

export default Advertising;