import React from "react";

const TaskInfo = () =>{

    return(
        <div className="row">
            <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input id="icon_prefix" type="text" className="validate"/>
                            <label htmlFor="icon_prefix">Customer</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">insert_chart</i>
                            <input id="icon_project" type="text" className="validate"/>
                            <label htmlFor="icon_project">Project</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lightbulb_outline</i>
                            <input id="icon_incident" type="text" className="validate"/>
                            <label htmlFor="icon_incident">INC</label>
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default TaskInfo