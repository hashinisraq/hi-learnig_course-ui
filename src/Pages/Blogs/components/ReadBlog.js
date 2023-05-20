import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useBlogs from "../../../hooks/useBlogs";

const ReadBlog = () => {
    const title = useParams();
    const [blogs] = useBlogs();

    const selectedBlog = blogs.filter(blog => blog.title === title.title);
    const blog = selectedBlog[0];

    return (
        <>
            <Container className="py-3 px-5">
                <h1 className="py-3">{blog?.title}</h1>
                <div className="d-flex align-items-center justify-content-start">
                    <div>
                        <img style={{ borderRadius: "50%", width: "60px" }} src={blog?.author_img} alt="author_img" />
                    </div>
                    <div className="ps-3">
                        <h6>{blog?.author}</h6>
                        <h6>{blog?.date}</h6>
                    </div>
                </div>
                <div className="text-center pb-3">
                    <img src={blog?.banner} width="70%" height="50%" alt="banner" className="py-3" />
                </div>
                <p className="pb-4">{blog?.details}</p>
            </Container>
        </>
    );
};

export default ReadBlog;