// import React ,{useState,useEffect}from 'react';
// import axios from 'axios';
// import { navigate } from '@reach/router';

// const Display = (props) => {
// const[type,id]=props;
// const [responseData, setResponseData] = useState("");

// const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.get('https://swapi.dev/api/'+type+'/'+id)
//     .then(response=>{
//         console.log(response.data);
//         setResponseData(response.data);
//         navigate('/'+type+'/'+id)
//     })

// }
// useEffect(() => {
//     handleSubmit(e);    
// });
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Display
