import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const [author, setAuthor] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data))
            
    }, [])
    const removeFromDom = authorId => {
        setAuthor(author.filter(author => author._id !== authorId))
    }
    return (
        <>
        <div>
           <Link to ={"/author"}> Add an Author</Link>
           <h3>We have quotes by:</h3>
        {
            
            props.author.map((author, idx) =>
        {
            return( 
            
                <p key={idx}>
                
                    {author.name}
                
                    
                    <button  type="submit"  onClick={()=> navigate("/author/" + author._id + "/edit")}>Edit</button>
                
                <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
            </p>
            )
        })
        }
        </div>
        </>
    )
}

export default AuthorList
