import React from 'react'
import styles from './TaskTime.module.css'

const TaskTime = (props) =>{

    return(
        <div className={`${styles.cardFooter} `} >
            <div className={`${styles.timer}`}>{`${props.timeStart}-${props.timeEnd}`}</div>
            <div className={`${styles.btns}`}>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">pause</i></a>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">stop</i></a>
            </div>
        </div>
    )
}

export default TaskTime