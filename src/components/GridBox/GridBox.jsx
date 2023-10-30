import React from "react";
import styles from './GridBox.module.css'

const GridBox = (props) =>{

    return(
        <div className={` ${props.className} row ${styles.displayFlex}`}>
            {props.children}
        </div>
    )
}

export default GridBox