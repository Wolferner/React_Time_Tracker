import React,{useState} from 'react'
import styles from './Task.module.css'


const Task = (props) =>{

    const [text, setText] = useState('KAkojto text kjashdkahdkjahdkhsdkjshkjdhaskdhsakjhdakshdkjsahdkjsahdksahdkjashdjakjkj')
const [isEditing, setIsEditing] = useState(false)

const togleHandler = ()=>{
    setIsEditing(!isEditing)
}
const changeTextHandler = (event) =>{
    setText(event.target.value)
}

    return(
        <div className={`${styles.Task} row`}>
            <div className={`${styles.card} col s12 m6`}>
                <div className="card blue-grey darken-1">
                    <div className={` card-content white-text`}>
                        <span className="card-title">TEST TITLE</span>

                        {isEditing 
                        ?  (<div className={`${styles.cardContent} input-field col s12`}>
                                <textarea id="textarea1" className=" materialize-textarea" 
                                onChange={changeTextHandler}  onBlur={togleHandler} value={text} />
                            </div>) 

                        :  (<div onClick={togleHandler} className={`${styles.cardContent} col s12`} >
                                {text}
                            </div>)}
                    </div>

                    <div>{props.children}</div>
                </div>
            </div>
        </div>
    )
}

export default Task