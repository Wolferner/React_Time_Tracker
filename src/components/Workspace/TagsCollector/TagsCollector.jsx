import React, {useEffect} from "react";
import styles from './TagsCollector.module.css'
import M from 'materialize-css';

const TagsCollector = () =>{

    useEffect(()=>{

        const options={
            placeholder: 'Enter Tag',
            secondaryPlaceholder: '+Tag',
            autocompleteOptions:{
                data:{
                    apple: null,
                    banana: null
                }}}

        const elems = document.querySelectorAll('.chips')

        const initial = M.Chips.init(elems, options)
    }, [])


    return(
        <div className="row">
            <div className="col s12">
                <div className="chips"></div>
            </div>
        </div>
    )
}

export default TagsCollector