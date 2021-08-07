import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from '../Components/AuthorForm';
const Update = (props) => {


    const { id } = props;
    const [author, setAuthor] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])
    const [errors, setErrors] = useState([]);
    const updateAuthor = (author) => {
        axios.put('http://localhost:8000/api/author/' + id, author)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }
    return (
        <div>
            {loaded && (
                <>
                    Edit this Author
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <AuthorForm
                        onSubmitProp={updateAuthor} initialName={author.name}
                    />
                    <button onClick={() => navigate("/")}>Cancel</button>
                </>
            )}
        </div>
    )
}

export default Update;