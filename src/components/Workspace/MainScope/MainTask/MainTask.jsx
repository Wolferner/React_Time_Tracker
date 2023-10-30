import React from "react";
import styles from './MainTask.module.css'
import TaskInfo from "./TaskInfo/TaskInfo";
import TaskCard from "./TaskCard/TaskCard";

const MainTask = () =>{

    return(
        <div className="row">
            <div className="col s12 m6">
                <TaskCard/>
                <TaskInfo/>
            </div>
        </div>
    )
}

export default MainTask