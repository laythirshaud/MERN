import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PlayerForm from './PlayerForm';
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

const UpdatePlayer = (props) => {
    const { id } = props;
    const [player, setPlayer] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors]=useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player/' + id)
            .then(res => {
                setPlayer(res.data);
                setLoaded(true);
            })
    }, [])
    const updatePlayer = player => {
        axios.put('http://localhost:8000/api/player/' + id, player)
            .then(res => {navigate("/")})
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
            <h1>Update a player</h1>
            {loaded && (
                <>
                    <PlayerForm
                        onSubmitProp={updatePlayer}
                        initialName={player.name}
                        initialPosition={player.position}
                    />
                    <DeleteButton playerId={player._id} successCallback={() => navigate("/")} />
                </>
            )}
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </div>
    )
}

export default UpdatePlayer

