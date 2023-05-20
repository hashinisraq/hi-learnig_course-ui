import React from "react";
import { Container, Row } from "react-bootstrap";
import Blog from "./components/Blog";
import useBlogs from "../../hooks/useBlogs";

const Blogs = () => {
    const [blogs] = useBlogs();

    return (
        <div>
            <Container>
                <h3 className="m-0 pb-3 text-center">BLOGS</h3>
                <Row className="py-5 gy-3">
                    {
                        blogs.map(blog => <Blog
                            key={blog._id}
                            blog={blog}
                        ></Blog>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;