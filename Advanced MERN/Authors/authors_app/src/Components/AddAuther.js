import React, {useState} from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';
import { navigate } from '@reach/router';

const AddAuther = () => {
    const [errors, setErrors] = useState([]);
    const [authors, setAuthor] = useState([]);
    
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res=>{
                setAuthor([...authors, res.data] )
                 navigate("/")
            
            })
















            
            // .then(navigate("/"))
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
            <h3>Add new Author</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}

            <AuthorForm onSubmitProp={createAuthor} initialName=""/>
            <button onClick={()=> navigate("/")}>Cancel</button>
            
        </div>
        
    )
}

export default AddAuther
