import React from 'react'
import styles from './Workspace.module.css'
import TitleInput from './TitleInput/TitleInput'
import TagsCollector from './TagsCollector/TagsCollector'

const Workspace = () =>{


    return(
<div className='row'>
    <div className={`${styles.title} col s12 `}>
        <TitleInput/>
    </div>

    <div className={`${styles.tags} col s12 `}>
        <TagsCollector/>
    </div>

    <div className={`${styles.comment} col s12 `}>

    </div>
</div>
    )
}

export default Workspace
