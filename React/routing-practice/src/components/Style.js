import React from 'react'

const Style = (props) => {
    const {color ,background,hello}= props;
if (isNaN(props.hello)){
    return (
        <div>
            <h1 style={{color:color ,background :background}}>
                The word is :{(hello)}
            </h1>
        </div>
    )
}
else {
    return (
        <div>
            <h1 style={{color:props.color ,background :props.background}}>
                The Number is :{(hello)}
            </h1>
        </div>
    )
}
}

export default Style
