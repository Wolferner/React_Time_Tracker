import React from 'react'
import styles from './Workspace.module.css'
import WorkspaceHeader from './WorkspaceHeader/WorkspaceHeader'
import WsSearching from './WsSearching/WsSearching'
import MainScope from './MainScope/MainScope'

const Workspace = () =>{

    return(
        <div className='row'>
            <div className={`${styles.wsHeader} col s12`} >
                <WorkspaceHeader/>
            </div>
            <div className={`col s12`}>
                <p>Favorits</p>
            </div>
            <div className={`col s12`}>
                <WsSearching/>
            </div>
            <div className={`col s12`}>
                <MainScope/>
            </div>
        </div>
    )
}

export default Workspace
