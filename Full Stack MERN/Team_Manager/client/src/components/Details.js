import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const Detail= ({id}) => {
    const [player, setPlayer] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/player/" +id)
            .then(res => setPlayer(res.data))
    }, [id])
    return (
        <>
        <div>
            <p>Name: {player.name}</p>
            <p>position: {player.position}</p>
        </div>
        <button  type="submit"  onClick={()=> navigate("/update/"+ player._id  )}>Edit</button>
        </>
    )
}
export default Detail