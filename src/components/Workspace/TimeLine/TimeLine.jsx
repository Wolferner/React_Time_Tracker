import React,{useState, useEffect, } from "react";
import styles from './timeLine.module.css'
import Task from "../../Task/Task.jsx";
import TaskTime from "../../TaskTime/TaskTime.jsx";
import InfoBlock from "../../InfoBlock/InfoBlock.jsx"
import TimeLineItem from "../../TimeLineItem/TimeLineItem.jsx";

const MainScope = (props) =>{


// const timeLabel = (timeStart, timeEnd)=>{
//     const timeStartHours = timeStart.getHours()
//     const timeStartMinutes = timeStart.getMinutes()
//     const start = `${timeStartHours}:${timeStartMinutes}`

//     if (timeEnd != undefined){
//         const timeEndHours = timeEnd.getHours()
//         const timeEndMinutes = timeEnd.getMinutes()
//         const ends = `${timeEndHours}:${timeEndMinutes}`
//         return `${start} - ${ends}`
//     }else{
//         return `${start} -`
//     }}
let propDatas = props.datas

const sendDataToTimeLine = (timeLineItems, propDatas) =>{
    const activeItem = Array.from(timeLineItems).filter((item)=>item.classList.contains('active'))

    if (activeItem.length > 0) {
        activeItem.forEach(element => {
            element.setAttribute('datas', propDatas)
        })
    }else{
        return React.createElement(TimeLineItem,{datas:propDatas, className:"active"});
    }
}

const testHandler = (event) =>{
    event.preventDefault()
    let timeLineItems = document.querySelectorAll('.TimeLineItem')
    if (timeLineItems.length === 0){
        return React.createElement(TimeLineItem,{datas:{propDatas}, className:"active"});
    }else{
        // pass info, func- pered data
        sendDataToTimeLine(timeLineItems, propDatas)
    }
}
    return(
        <div className={`${styles.timeLine} `}>
            <a onClick={testHandler} href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>





             {/* {props.datas.map((data)=>{
                const timeStart = new Date(data.timeStart);
                const timeEnd = new Date(data.timeEnd);
                const time = timeLabel(timeStart, timeEnd);

                return(
                    <TimeLineItem>
                    <div className={`${styles.rotate90}`}>{`${time}`}</div>
                        <div className={`${styles.sideBar}`} > </div>
                        <Task data={data}>
                            <InfoBlock data={data}/>
                            <TaskTime time={time}/>
                        </Task>
                    </TimeLineItem>
                )})}  */}
        </div>
    )
}

export default MainScope