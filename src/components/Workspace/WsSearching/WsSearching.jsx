import React from "react";
import styles from './WsSearching.module.css'

const WsSearching = () =>{

    return(
        <div className="container">
            <nav>
                <div className="nav-wrapper blue-grey">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required/>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default WsSearching