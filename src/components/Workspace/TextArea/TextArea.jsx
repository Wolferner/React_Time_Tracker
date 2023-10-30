import React from "react";
import styles from './TextArea.module.css'

const TextArea = () =>{

    return(
        <div className=" row">
            <div className="col s12">
                <textarea className="materialize-textarea" id="textarea"></textarea>
                <label htmlFor="textarea">Your Text</label>
            </div>
        </div>
    )
}


export default TextArea