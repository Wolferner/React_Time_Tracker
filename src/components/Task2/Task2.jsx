import React from "react";
import styles from './Task2.module.css'

const Task2 = (props) =>{

    return(
        <div>
            <div className={`${styles.header}`}>
                <span className="card-title">TEST TITLE</span>
            </div>

            <div className={`${styles.description}`}>
                {isEditing 
                ?  (<div className={`${styles.cardContent} input-field col s12`}>
                        <textarea id="textarea1" className=" materialize-textarea" 
                        onChange={changeTextHandler}  onBlur={togleHandler} value={text} />
                    </div>) 

                :  (<div onClick={togleHandler} className={`${styles.cardContent} col s12`} >
                        {text}
                    </div>)}
            </div>

            <div className={`${styles.footer}`}>
                    <div className={`${styles.timer}`}>8:00 - 9:10</div>
                    <div className={`${styles.btns}`}>
                        <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
                        <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">pause</i></a>
                        <a href="#" className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">stop</i></a>
                    </div>
            </div>

        </div>
    )
}

export default Task2