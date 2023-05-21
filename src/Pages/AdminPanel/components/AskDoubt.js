import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const AskDoubt = () => {
    const [issues, setIssues] = useState([]);


    useEffect(() => {
        fetch('https://learningcourse-server.onrender.com/ask_doubt')
            .then(res => res.json())
            .then(data => setIssues(data))
    }, [issues])

    return (
        <>
            <h3 className="text-center">Ask Doubt</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Issue</th>
                    </tr>
                </thead>
                <tbody>
                    {issues.map(issue => <tr
                        key={issue._id}
                    >
                        <td>{issue.name}</td>
                        <td>{issue.email}</td>
                        <td>{issue.issue}</td>
                    </tr>)}
                </tbody>
            </Table >
        </>
    );
};

export default AskDoubt;