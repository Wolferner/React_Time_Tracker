import React from "react";
import styles from './MainTask.module.css'

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

            <div className="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" class="validate"/>
                            <label htmlFor="icon_prefix">Customer</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">insert_chart</i>
                            <input id="icon_project" type="text" class="validate"/>
                            <label htmlFor="icon_project">Project</label>
                        </div>
                        <div class="input-field col s12">
                            <i class="material-icons prefix">lightbulb_outline</i>
                            <input id="icon_incident" type="text" class="validate"/>
                            <label htmlFor="icon_incident">INC</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default MainTask