import React,{useState} from "react";
import styles from './MainTask.module.css'
import TaskInfo from "./TaskInfo/TaskInfo";
import TaskCard from "./TaskCard/TaskCard";

const MainTask = () =>{


const [taskInfoShow, setTaskInfoShow] = useState(false)
const getTaskInfoHandler = (value) =>{
    setTaskInfoShow(value)

}

    return(
        <div className="row">
            <div className="col s12 m6" >
                <TaskCard onGetTaskInfo ={getTaskInfoHandler} value={taskInfoShow} />
                {taskInfoShow && (<TaskInfo/>) }
                
            </div>
        </div>
    )
}

export default MainTask