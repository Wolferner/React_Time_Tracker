import React,{useState} from "react";
import styles from './TaskCard.module.css'


const TaskCard = (props) =>{

// pokazivet ili prjachet informaciju
const showStateHandler = (event) =>{
    event.preventDefault()
    props.onGetTaskInfo(!props.value)
}

// perekluchatel textarea na otobrazhenije texta
const [text, setText] = useState('ssdfsdfsdfsdfdsfsdfdsfsdfsdfsdfdsfsd')
const [isEditing, setIsEditing] = useState(false)

const togleHandler = ()=>{
    setIsEditing(!isEditing)
}
const changeTextHandler = (event) =>{
    setText(event.target.value)
}


    return(
        <div className="row">
            <div className="col s12 m6">
                    <div className="card blue-grey darken-1">
                        <div className={` card-content white-text`}>
                            <span className="card-title">Card Title</span>

                            {isEditing 
                            ?  (<div className="input-field col s12">
                                    <textarea id="textarea1" className=" materialize-textarea" 
                                    onChange={changeTextHandler}  onBlur={togleHandler} value={text} />
                                </div>) 

                            :  (<div onClick={togleHandler} className={`${styles.cardContent}`} >
                                    <p>{text}</p>
                                </div>)}
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