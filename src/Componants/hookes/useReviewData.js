import { useEffect, useState } from "react"

const useReviewData = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('userReviewData.json')
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);

    return [users, setUsers];
};

export default useReviewData;