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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores placeat quam velit sint! Perferendis autem voluptates, quod consectetur reiciendis impedit distinctio expedita vitae quasi atque repellendus officiis officia magnam repellat.</p>
                
            {/* <TimeLineItem>
                <div className={`${styles.sideBarCont}`}>
                    <span className={`${styles.rotate90}`}>9:00-9:50</span>
                    <div className={`${styles.sideBar}`} >
                        BarSide
                    </div>
                </div>
                <div className={`${styles.card}`}>
                    <Task>
                        <InfoBlock/>
                        <TaskTime/>
                    </Task>
                </div>
            </TimeLineItem> */}
        </div>
    )
}

export default MainScope