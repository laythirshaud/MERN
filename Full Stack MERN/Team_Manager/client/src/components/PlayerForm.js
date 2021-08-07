import React, { useState } from 'react'
const PlayerForm = (props) => {
    const {initialName, initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, position });
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br />
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <label>Position</label><br />
                <input 
                    type="text" 
                    name="position" 
                    value={position} 
                    onChange={(e) => { setPosition(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
        
    )
}
export default PlayerForm