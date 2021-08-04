import { Link, navigate } from '@reach/router';
import React, { useState } from 'react'

const AuthorForm = (props) => {
    const { initialName,onSubmitProp} = props;
    const [name, setName] = useState(initialName); 
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        onSubmitProp({name});
        setName("");
    }
    return (
        <>
        <div>
            <form onSubmit={onSubmitHandler}>
            <Link to={"/"}>
                    Home
                    </Link> 
                <br></br>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <br></br>
            <input  type="submit" />
            
        </form>
        </div>
        </>
    )
}

export default AuthorForm
