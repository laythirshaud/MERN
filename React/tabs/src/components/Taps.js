// import React, { useState } from 'react'
// import './Style.css';

// const Tabs = (props) => {
//     const [state, setState] = useState({
//         Tab: 1
//     });

//     const onClick = (e, value) => {
//         setState({
//             Tab: value
//         });
// };
// return (
//     <center>
//         <h1 >Tabs</h1>
//         {/* without return for "map", we didn't have {} */}
//         {[1, 2, 3].map((value, index) =>
//             <button key={index} onClick={e => onClick(e, value)} selectTabs={state.Tab === value} >
//                 Tab{value} {/*  value from array 1 2 3 .... */}
//             </button>
//         )}
//         <content style={{
//             display: "flex", justifyContent: "center",
//             alignItems: 'center', border: "black solid", width: 200, marginTop: 40, padding: 120
//         }}>
//             Tab {state.Tab} content is showing here
//         </content>

//     </center>
// )
// }

// export default Tabs;

import React,{useState} from 'react'
import Button from '@material-ui/core/Button';

const Taps = () => {
    const taps=["Tap1","Tap2","Tap3"];
    const [msg,setMsg]=useState("");

    const clickhandler = (e,value,i) => {
        e.preventDefault();
        setMsg(value + " was taped")
    }
    return (
        <div>
            {
                taps.map((value,i)=> {
                    return <Button variant="contained" color="primary" key={i} onClick={(e)=>clickhandler(e,value,i)}>
                    {value}
                </Button>
                })
            }
            <p>{msg}</p>
            
        </div>
    )
}

export default Taps
