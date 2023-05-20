import { useEffect, useState } from "react";

const useFreeCourses = () => {
    const [freeCourses, setFreeCourses] = useState([]);
    useEffect(() => {
        fetch('https://zeroneacademy-server.onrender.com/free_courses')
            .then(res => res.json())
            .then(data => setFreeCourses(data))
    }, [freeCourses])

    return [freeCourses, setFreeCourses];
}
export default useFreeCourses;