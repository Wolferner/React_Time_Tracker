import React, {useEffect, useState} from 'react';
import styles from './TitleInput.module.css'
import M from 'materialize-css';


const TitleInput = (props) =>{

    useEffect(() => {
        const options = {
          data: {
            "Apple": null,
            "Google": null,
            "Facebook": null}};
    
        const elems = document.querySelectorAll('.autocomplete');
        M.Autocomplete.init(elems, options);
      }, []);
    
      const [titleKeeper, setTitleKeeper] = useState('')
      const inputChangeHandler = (event)=>{
        setTitleKeeper(event.target.value)
      }

      const [timeStart, setTimeStart] = useState()


      const timerStartHandler = (event) =>{
        event.preventDefault()
        setTimeStart(new Date().toLocaleTimeString())
        props.getTimeStart(timeStart)
        props.getTitle(titleKeeper)
        
        // zapusk taimera i otpravka vremeni
      }


    return(
        <div className={`${styles.globalCont} row`}>

            <div className={`${styles.input} col s9 `}>
                <div className={`${styles.globalCont} row`}>
                    <div className={`${styles.titleBtn} col s1 `}>
                        <a className="secondary-content prefix-button" href=""><i className="material-icons prefix">textsms</i></a>
                        <a className="secondary-content prefix-button" href=""><i className="material-icons prefix">textsms</i></a>
                    </div>

                    <div className={`${styles.inputCont} input-field col s11`}>
                        <input type="text" id="autocomplete-input" className="autocomplete" onChange={inputChangeHandler}/>
                        <label htmlFor="autocomplete-input">Title</label>
                    </div>
                </div>
            </div>

            <div className='col s3 '>
                <div className={`${styles.btnContainer} row`}>
                    <div className={`${styles.mediaBtns} col s4`}>
                        <a href="" className="secondary-content"><i className="material-icons">stop</i></a>
                        <a href="" className="secondary-content"><i
                                className="material-icons">pause_circle_outline</i></a>
                        <a href="" className="secondary-content" onClick={timerStartHandler}><i
                                className="material-icons">play_circle_outline</i></a>
                    </div>
                    <div id="time_display" className='col s8'>00.00.00</div>
                </div>
            </div>

        </div>
    )
}

export default TitleInput