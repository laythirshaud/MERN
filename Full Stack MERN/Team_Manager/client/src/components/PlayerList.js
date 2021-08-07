import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const PlayerList = () => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setPlayer(res.data));
    }, [])
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id != playerId));
    }
    return (
        <div>
            <Link to ={"/new"}>Add A New Player</Link>
            {player.map((layth, idx) => {
                return (
                    <>
                    
                    <p key={idx}>
                        <Link to={"/details/" + layth._id}>
                        <p>{layth.name} {layth.position}</p>
                        </Link>
                        <button  type="submit"  onClick={()=> navigate("/update/"+ layth._id  )}>Edit</button>
                            {/* <p> Name: {layth.name} </p> <p> Position:{layth.position}</p> */}
                        <DeleteButton playerId={layth._id} successCallback={()=>removeFromDom(layth._id)}/>
                    </p>
                    
                    </>
                )
            })}
        </div>
    )
}

export default PlayerList
