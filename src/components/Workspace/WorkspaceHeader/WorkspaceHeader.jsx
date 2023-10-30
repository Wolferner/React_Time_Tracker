import React from 'react'
import styles from './WorkspaceHeader.module.css'
import TitleInput from '../TitleInput/TitleInput'
import TagsCollector from '../TagsCollector/TagsCollector'
import TextArea from '../TextArea/TextArea'

const WorkspaceHeader = () =>{

    return(
        <div className='row'>
            <div className={`${styles.title} col s12 `}>
                <TitleInput/>
            </div>

            <div className={`${styles.tags} col s12 `}>
                <TagsCollector/>
            </div>

            <div className={`${styles.comment} col s12 `}>
                <TextArea/>
            </div>
        </div>
    )
}

export default WorkspaceHeader