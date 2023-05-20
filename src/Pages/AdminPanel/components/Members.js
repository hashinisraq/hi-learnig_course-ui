import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Members = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://zeroneacademy-server.onrender.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])

    return (
        <>
            <h3 className="text-center">Members</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Phone No</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => <tr
                            key={user._id}
                        >
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td>{user.phone !== "0" ? <>{user.phone}</> : <>none</>}</td>
                            <td>{user.role}</td>
                        </tr>)
                    }
                </tbody>
            </Table >
        </>
    );
};

export default Members;