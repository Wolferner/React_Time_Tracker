import React,{useState} from "react";
import styles from './TaskCard.module.css'

const TaskCard = (props) =>{

const showStateHandler = (event) =>{
    event.preventDefault()
    props.onGetTaskInfo(!props.value)

}

    return(
        <div className="row">
            <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className={`${styles.cardFooter} card-action`} >
                            <a href="" className={`${styles.settings} secondary-content`} onClick={showStateHandler}><i className="material-icons tiny " >settings</i></a>
                            <div className={`${styles.timer}`}>8:00 - 9:10</div>
                            <div className={`${styles.btns}`}>
                                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
                                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">pause</i></a>
                                <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">stop</i></a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default TaskCard