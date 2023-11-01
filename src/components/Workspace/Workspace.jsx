import React from 'react'
import styles from './Workspace.module.css'
import WorkspaceHeader from './WorkspaceHeader/WorkspaceHeader'
import WsSearching from './WsSearching/WsSearching'
import TimeLine from './TimeLine/TimeLine'

const Workspace = () =>{

    return(
        <div className={`${styles.main} row `}>
            <div className={`${styles.wsHeader} col s12 `} >
                <WorkspaceHeader/>
            </div>
            <div className={`col s12 `}>
                <p>Favorits</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque ratione explicabo vitae. Suscipit mollitia odit amet assumenda blanditiis, ad aliquam quae corrupti enim beatae incidunt veritatis nostrum accusamus ut animi.</p>
            </div>
            <div className={`col s12 `}>
                <WsSearching/>
            </div>
            <div className={`col s12 `}>
                <TimeLine/>
            </div>
        </div>
    )
}

export default Workspace
