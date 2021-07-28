import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { navigate } from '@reach/router';

const APIwalker = (props) => {
    const [type, setType] = useState("people");
    const [id, setId] = useState(1);
    const [responseData, setResponseData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('https://swapi.dev/api/' + type + '/' + id)
            .then(response => {
                setResponseData(response.data);
                navigate('/' + type + '/' + id)
            })
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/1`)
            .then(response => { setResponseData(response.data); })
    }, [])

    return (
        <>
            <div>
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <label>Search for :</label>
                    <select value={type} onChange={e => setType(e.target.value)}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>
                    <label>ID:</label>
                    <input type="number" value={id} onChange={e => setId(e.target.value)} />
                    <Button variant="contained" color="primary" type="submit">search</Button>
                </form>
            </div>
            <div>
                <h1>{responseData.name}</h1>
                {
                    responseData ?
                        Object.keys(responseData).map((key, index) => {
                            return index < 5 ? <p key={key}>{key} : {responseData[key]}</p> : null
                        })
                        :
                        ' "These are not the droids you are looking for"'
                }
            </div>
        </>
    )
}
export default APIwalker












// import React,{useEffect, useState} from 'react'
// import Button from '@material-ui/core/Button';
// import axios from 'axios';
// import { Link } from '@reach/router';

// const APIwalker = (props) => {
//     const [selectedtype, setSelectedType] = useState(type[0]);
//     const [name, setName]= useState([]);
//     const layth = ()=>{
//         axios.get(`https://swapi.dev/api/${selectedtype}/${props.id}`)
//         .then(response=>{setName(response.data.results)
//         console.log(response.data.results)
//         })
//     }
//     return (
//             <form>
//                 <label>Search for :</label> 
//                 <select value={selectedtype} onChange={e => setSelectedType(e.target.value)}><h1>Search</h1>
//                     {type.map((type, idx) => (
//                         <option key={idx} value={type}>{type}</option>
//                     ))}
//                 </select>
//                 <label>ID:</label><input></input>
//                 <Button variant="contained" color="primary" onClick={layth}> Fetch Pokemon</Button>
//                 <ul>
//                     {   name.map(
//                             (item, x) => {
//                                 const {name} = item 
//                                 return (<li key={x}>{name}</li>)}
//                         )}     
//                     <link to ="" ></link>
//                 </ul>
//             </form>
//     )
// }

// export default APIwalker
