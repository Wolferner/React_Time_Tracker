import React,{useState} from "react";
import styles from './MainTask.module.css'
import TaskInfo from "./TaskInfo/TaskInfo";
import TaskCard from "./TaskCard/TaskCard";

// const data ={
//         title: 'Make a job',
//         content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
//     }



const MainTask = (props) =>{

const [taskInfoShow, setTaskInfoShow] = useState(false)
const getTaskInfoHandler = (value) =>{
    setTaskInfoShow(value)

}

    return(
        <div className="row">
            <div className="col s12 m6" >
                <TaskCard taskData={props.data} onGetTaskInfo ={getTaskInfoHandler} value={taskInfoShow} />
                {taskInfoShow && (<TaskInfo/>) }
                
            </div>
        </div>
    )
}

export default MainTask