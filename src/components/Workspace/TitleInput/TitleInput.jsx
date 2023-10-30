import styles from './TitleInput.module.css'

const TitleInput = () =>{

    return(
        <div className="row">

            <div className={`${styles.input} col s9 `}>
                <div className={`${styles.titleBtn}`}>
                    <a className="secondary-content prefix-button" href=""><i className="material-icons prefix">textsms</i></a>
                    <a className="secondary-content prefix-button" href=""><i className="material-icons prefix">textsms</i></a>
                </div>

                <div className="input-field ">
                    <input type="text" id="autocomplete-input" className="autocomplete"/>
                    <label htmlFor="autocomplete-input">Title</label>
                </div>
            </div>

            <div className='col s3 '>
                <div className="row">
                    <a href="" className="secondary-content"><i className="material-icons">stop</i></a>
                    <a href="" className="secondary-content"><i
                            className="material-icons">pause_circle_outline</i></a>
                    <a href="" className="secondary-content"><i
                            className="material-icons">play_circle_outline</i></a>
                    <div id="time_display">00.00.00</div>
                </div>
            </div>

        </div>
    )
}

export default TitleInput