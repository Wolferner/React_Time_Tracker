import React, {useEffect} from 'react';
import styles from './TitleInput.module.css'
import M from 'materialize-css';


const TitleInput = () =>{

    useEffect(() => {
        const options = {
          data: {
            "Apple": null,
            "Google": null,
            "Facebook": null}};
    
        const elems = document.querySelectorAll('.autocomplete');
        M.Autocomplete.init(elems, options);
      }, []);
    

    return(
        <div className={`${styles.globalCont} row`}>

            <div className={`${styles.input} col s9 `}>
                <div className={`${styles.globalCont} row`}>
                    <div className={`${styles.titleBtn} col s1 `}>
                        <a className="secondary-content prefix-button" href=""><i className="material-icons prefix">textsms</i></a>
                        <a className="secondary-content prefix-button" href=""><i className="material-icons prefix">textsms</i></a>
                    </div>

                    <div className={`${styles.inputCont} input-field col s11`}>
                        <input type="text" id="autocomplete-input" className="autocomplete"/>
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
                        <a href="" className="secondary-content"><i
                                className="material-icons">play_circle_outline</i></a>
                    </div>
                    <div id="time_display" className='col s8'>00.00.00</div>
                </div>
            </div>

        </div>
    )
}

export default TitleInput