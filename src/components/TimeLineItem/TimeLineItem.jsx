import React from "react";
import styles from './TimeLineItem.module.css'

const TimeLineItem = (props) =>{

    return(
        <div className={`${styles.TimeLineItem} outline row`}>
            {props.children}
        </div>
    )
}

export default TimeLineItem