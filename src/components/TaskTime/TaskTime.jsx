import React from 'react'
import styles from './TaskTime.module.css'

const TaskTime = () =>{

    return(
        <div className={`${styles.cardFooter} card-action`} >
            <div className={`${styles.timer}`}>8:00 - 9:10</div>
            <div className={`${styles.btns}`}>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">pause</i></a>
                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">stop</i></a>
            </div>
        </div>
    )
}

export default TaskTime