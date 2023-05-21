import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://learningcourse-server.onrender.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    useEffect(() => {
        fetch('https://learningcourse-server.onrender.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])


    const handOnClick = (mailaddress, TxId, status, displayName, course, phone, batch) => {
        const user = { TxId, status };
        fetch('https://learningcourse-server.onrender.com/orders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })

        if (status === "confirmed") {
            updateUserEnroll_1(displayName, course);
            updateUserEnroll_2(displayName, batch);
            updateUserPhone(displayName, phone);
            nodemailer(mailaddress, "confirmed");
        }
        else if (status === "cancelled") {
            updateUserPhone(displayName, phone);
            nodemailer(mailaddress, "cancelled");
        }
    }

    const nodemailer = (mail, action) => {
        const data = {
            order_email: mail,
            status: action,
        }
        fetch('https://learningcourse-server.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data }),
        });
    }

    const updateUserEnroll_1 = (displayName, course) => {
        const selectedUser = users.filter(user => user.displayName === displayName);
        const selectedUserEnrolls = selectedUser[0].enroll;
        const newEnroll = [...selectedUserEnrolls];
        newEnroll[newEnroll.length] = course;

        const user = { displayName, newEnroll };

        fetch('https://learningcourse-server.onrender.com/users_enroll_update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    const updateUserEnroll_2 = (displayName, course) => {
        const selectedUser = users.filter(user => user.displayName === displayName);
        const selectedUserBatch = selectedUser[0].batch;
        const newBatch = [...selectedUserBatch];
        newBatch[newBatch.length] = course;

        const user = { displayName, newBatch };

        fetch('https://learningcourse-server.onrender.com/users_batch_update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }


    const updateUserPhone = (displayName, phone) => {
        const user = { displayName, phone };

        fetch('https://learningcourse-server.onrender.com/users_update_phone', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }


    return (
        <>
            <h3 className="text-center">Orders</h3>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                        <th>Method</th>
                        <th>Phone No</th>
                        <th>TxID</th>
                        <th>Batch</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => <tr
                        key={order._id}
                    >
                        <td>{order.displayName}</td>
                        <td>{order.email}</td>
                        <td>{order.course}</td>
                        <td>{order.payment}</td>
                        <td>{order.phone}</td>
                        <td>{order.TxId}</td>
                        <td>{order.batchNo}</td>
                        {order.status !== "" ? <td>{order.status}</td> : <td className="d-flex justify-content-between align-items-center">
                            <Button variant="secondary" className="bg-dark" onClick={e => {
                                e.preventDefault();
                                handOnClick(order.email, order.TxId, "confirmed", order.displayName, order.course, order.phone, order.batchNo);
                            }}>Confirm</Button>
                            <Button variant="secondary" className="bg-dark" onClick={e => {
                                e.preventDefault();
                                handOnClick(order.email, order.TxId, "cancelled", order.displayName, order.course, order.phone, order.batchNo);
                            }}>Cancel</Button>
                        </td>}
                    </tr>)}
                </tbody>
            </Table>
        </>
    );
};

export default Orders;