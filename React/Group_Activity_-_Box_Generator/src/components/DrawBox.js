import React from 'react'
import styles from '../box.module.css';

const DrawBox = (props) => {
    return (
        <div className={styles.box} style={{backgroundColor:props.myColor}}>
        </div>
    )
}

export default DrawBox
