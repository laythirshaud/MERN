import React from 'react'
import axios from 'axios';
const DeleteButton = (props) => {
    const { playerId, successCallback } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/player/delete/' + playerId)
            .then(res=>{
                successCallback();
            })
    }
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}
export default DeleteButton
