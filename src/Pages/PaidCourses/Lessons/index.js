import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import "./style.css";

const Lessons = () => {
    const { courseTitle } = useParams();
    const [contents, setcontents] = useState([]);

    const MSWD = () => {
        useEffect(() => {
            fetch('https://learningcourse-server.onrender.com/mern_stack_web_development')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }



    if (courseTitle === "MERN STACK WEB DEVELEPMENT") {
        MSWD();
    }

    const first_content = contents[0];

    const handleOnClick = () => {
        let listvideo = document.querySelectorAll('.video-list .vid');
        let mainVideo = document.querySelector('.main-video iframe');
        let title = document.querySelector('.main-video .title');

        listvideo.forEach(video => {
            video.onclick = () => {
                listvideo.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');
                if (video.classList.contains('active')) {
                    let src = video.children[0].getAttribute('src');
                    mainVideo.src = src;
                    let text = video.children[1].innerHTML;
                    title.innerHTML = text;
                }
            }
        })
    }


    return (
        <>
            <div className="top-div">
                <h3 className="heading">{courseTitle}</h3>

                <div className="container1">
                    <div className="main-video">
                        <div className="video">
                            <iframe src="https://drive.google.com/file/d/1h9DoitlyQDbttEWo0IwwSkEdfG_AlFVq/preview" allowFullScreen title={first_content?.topic} width="100%" height="400px" allow="autoplay" />
                            <h3 className="title">{first_content?.topic}</h3>
                        </div>
                    </div>

                    <div className="video-list" onClick={handleOnClick}>
                        {
                            contents.map(content => <Accordion key={content?._id}>
                                <Accordion.Item eventKey={content?._id}>
                                    <Accordion.Header>
                                        <b>Game {content?.game_no} {content?.game_name}</b>
                                    </Accordion.Header>
                                    {Object.entries(content?.levels).map(([key, value]) =>
                                        <Accordion.Body className="m-0 p-1" key={key}>
                                            {Object.entries(value).map(([key1, value1]) =>
                                                <Accordion.Body className="m-0 p-0" key={key1}>
                                                    <div className="vid">
                                                        <small src={`https://drive.google.com/file/d/${value1}/preview`} title={value1} width="20%" height="40px" allow="autoplay" />
                                                        <h3 className="title">{key1}</h3>
                                                    </div>
                                                </Accordion.Body>
                                            )}
                                        </Accordion.Body>
                                    )}
                                </Accordion.Item>
                            </Accordion>)
                        }


                    </div>

                </div>
            </div>
        </>
    );
};

export default Lessons;