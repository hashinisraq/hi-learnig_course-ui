import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import "./style.css";

const Lessons = () => {
    const { courseTitle } = useParams();
    const [contents, setcontents] = useState([]);

    const ProgrammingLanguageI = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/programming_language_I')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }

    const ProgrammingLanguageII = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/programming_language_II')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }

    const DataStructure = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/data_structure')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }

    const MathematicsI = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/mathematics_I')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }


    if (courseTitle === "PROGRAMMING LANGUAGE I") {
        ProgrammingLanguageI();
    }
    else if (courseTitle === "PROGRAMMING LANGUAGE II") {
        ProgrammingLanguageII();
    }
    else if (courseTitle === "DATA STRUCTURES") {
        DataStructure();
    }
    else if (courseTitle === "MATHEMATICS I: DIFFERENTIAL CALCULUS & COORDINATE GEOMETRY") {
        MathematicsI();
    }

    const first_content = contents[0];

    const handleOnClick = () => {
        let listvideo = document.querySelectorAll('.video-list .vid')
        let mainVideo = document.querySelector('.main-video video');
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
                            <video src={`https://drive.google.com/uc?id=${first_content?.video}`} controls controlsList="nodownload"></video>
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
                                            <Accordion>
                                                <Accordion.Header>
                                                    <b>{key}</b>
                                                </Accordion.Header>
                                                {Object.entries(value).map(([key1, value1]) =>
                                                    <Accordion.Body className="m-0 p-0" key={key1}>
                                                        <div className="vid">
                                                            <video src={`https://drive.google.com/uc?id=${value1}`} muted></video>
                                                            <h3 className="title">{key1}</h3>
                                                        </div>
                                                    </Accordion.Body>
                                                )}
                                            </Accordion>
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