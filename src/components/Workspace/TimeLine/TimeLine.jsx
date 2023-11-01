import React from "react";
import styles from './timeLine.module.css'
import Task from "../../Task/Task.jsx";
import TaskTime from "../../TaskTime/TaskTime.jsx";
import InfoBlock from "../../InfoBlock/InfoBlock.jsx"
import TimeLineItem from "../../TimeLineItem/TimeLineItem.jsx";

const datas = [
    {
        title: 'Make a job',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',

    },
    {
        title: 'Make a Burger',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    },
    {
        title: 'Make a Table',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    },
    {
        title: 'Dancing',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    }

]

const MainScope = () =>{

    return(
        <div className={`${styles.timeLine} `}>
                
            <TimeLineItem>
            <div className={`${styles.rotate90}`}>9:00-9:50</div>
                <div className={`${styles.sideBar}`} >
                    
                </div>
                <Task>
                    {/* <InfoBlock/> */}
                    {/* <TaskTime/> */}
                </Task>
                {/* <div className={`${styles.card}`}>
                </div> */}
            </TimeLineItem>
        </div>
    )
}

export default MainScope