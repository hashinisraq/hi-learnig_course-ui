import React, { useEffect, useState } from "react";
import "./YoutubePlayer";
import { useParams } from "react-router-dom";

const YoutubePlayer = () => {
    const { courseTitle } = useParams();
    const [contents, setcontents] = useState([]);

    const Recursion = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/recursion_in_python')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }

    const GraphInPython = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/graph_in_python')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }

    const QueueInPython = () => {
        useEffect(() => {
            fetch('https://zeroneacademy-server.onrender.com/queue_in_python')
                .then(res => res.json())
                .then(data => setcontents(data))
        }, [])
    }

    if (courseTitle === "RECURSION IN PYTHON") {
        Recursion();
    }
    else if (courseTitle === "GRAPH IN PYTHON") {
        GraphInPython();
    }
    else if (courseTitle === "QUEUE IN PYTHON") {
        QueueInPython();
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
                            <iframe width="100%" height="400px" src={first_content?.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h3 className="title">{first_content?.topic}</h3>
                        </div>
                    </div>

                    <div className="video-list" onClick={handleOnClick}>
                        {
                            contents.map(content => <div
                                key={content?._id}
                                className="vid">
                                <small src={content?.video} width="20%" height="40px" title="YouTube video player"></small>
                                <h3 className="title">{content?.topic}</h3>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default YoutubePlayer;