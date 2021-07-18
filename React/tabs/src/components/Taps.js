import React, { useState } from 'react'
import './Style.css';

const Tabs = (props) => {
    const [state, setState] = useState({
        Tab: 1
    });

    const onClick = (e, value) => {
        setState({
            Tab: value
        });
};
return (
    <center>
        <h1 >Tabs</h1>
        {/* without return for "map", we didn't have {} */}
        {[1, 2, 3].map((value, index) =>
            <button key={index} onClick={e => onClick(e, value)} selectTabs={state.Tab === value} >
                Tab{value} {/*  value from array 1 2 3 .... */}
            </button>
        )}
        <content style={{
            display: "flex", justifyContent: "center",
            alignItems: 'center', border: "black solid", width: 200, marginTop: 40, padding: 120
        }}>
            Tab {state.Tab} content is showing here
        </content>

    </center>
)
}

export default Tabs;