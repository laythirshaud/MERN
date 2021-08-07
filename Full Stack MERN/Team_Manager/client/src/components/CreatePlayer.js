import React,{ useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import PlayerForm from './PlayerForm'
const CreatePlayer = () => {
    const [errors, setErrors]=useState([]);
    const bateeekh = player => {
        
        axios.post('http://localhost:8000/api/player/new', player)
            .then(res=>{
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
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        <PlayerForm onSubmitProp={bateeekh} />
        </div>
    )
}

export default CreatePlayer
