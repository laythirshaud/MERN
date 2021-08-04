import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../Components/AuthorList';

const Main = () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthor(res.data);
                console.log(res.data);
                setLoaded(true);
            });
    }, [author])
    return (
        <div>
            {loaded && <AuthorList author={author} />}
        </div>
    )
}

export default Main
