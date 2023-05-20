import { useEffect, useState } from "react";

const usePaidCourses = () => {
    const [paidCourses, setPaidCourses] = useState([]);
    useEffect(() => {
        fetch('https://zeroneacademy-server.onrender.com/paid_courses')
            .then(res => res.json())
            .then(data => setPaidCourses(data))
    }, [paidCourses])

    return [paidCourses, setPaidCourses];
}
export default usePaidCourses;