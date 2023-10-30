import React from "react";
import styles from './MainTask.module.css'
import TaskInfo from "./TaskInfo/TaskInfo";

const MainTask = () =>{

    return(
        <div>
            <div className="row">
                <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                        <p>8:00 - 9:10</p>
                        <a href="#" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
                        <a href="#" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">pause</i></a>
                        <a href="#" className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">stop</i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col s12 m6">
                <TaskInfo/>
            </div>
        </div>
    )
}

export default MainTask