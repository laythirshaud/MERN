import React,{useState} from 'react'
import DrawBox from '../components/DrawBox';

const Form = () => {
    const [color,setColor]=useState("");
    const [box,setBox]=useState([]);
    const handleColor=(e)=>{
        setColor(e.target.value);
    }
    const handleSubmission=(e)=>{
        e.preventDefault();
        setBox(box.concat([<DrawBox myColor={color}/>]));
        setColor("");
    }
    return (
        <>
        <form onSubmit={(e)=>handleSubmission(e)}>
            <label htmlFor="colorInput">Color</label>
            <input id="colorInput" type="text" onChange={(e)=>handleColor(e)} value={color}/>
            <input type="submit" value="Add"/>
        </form>
        <div>
            {box}
        </div>
        </>
    )
}

export default Form
