import React from "react";
import styles from './TimeLineItem.module.css'
import InfoBlock from '../InfoBlock/InfoBlock.jsx'
import TaskTime from '../TaskTime/TaskTime.jsx'
import Task from '../Task/Task.jsx'

const TimeLineItem = (props) =>{

    return(
        <div className={`${styles.TimeLineItem} outline`}>
            {props.tasks.map(task=>(
                <Task key={task.id} {...task}>
                    <InfoBlock/>
                    <TaskTime  timeStart={task.timeStart} timeEnd={task.timeEnd}/>
                </Task>)
            )}
        </div>
    )
}

export default TimeLineItem