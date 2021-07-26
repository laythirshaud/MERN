import React from 'react'

const TheNumber = (props) => {

    if (isNaN(props.id)){
    return (
        <div>
        <h1>the word is : {props.id}</h1>
        </div>
    )
    }
    else {
    return(
        <h1>The Number is: {props.id}</h1>
    )}

    }
    


export default TheNumber
