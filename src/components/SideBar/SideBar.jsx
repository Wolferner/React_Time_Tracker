/* 
    SideBar
    Принимает в себя параметры position, gridRadtio, flex.
    position - может принимать значения (top, right, bottom, left, manual- делает эллемент drag and drop), изменяет расположение SideBara на экране.
    gridRatio - принимает значения от 1 до 12, изменяет класс (s), изменяя ширину SideBara.
*/

import React from "react"
import styles from './SideBar.module.css'


const SideBar = (props) =>{


    let PositionClass = "left";
    const position = props.position.toLowerCase();

    let gridRatio = props.gridRatio

    // switch(position){
    //     case 'left': 
    //         PositionClass = "left" 
    //         break
    //     case 'right': 
    //         PositionClass = "right"
    //         break
    //     case 'top': 
    //         PositionClass = "top"
    //         gridRatio = '12'
    //         break
    //     case 'bottom':
    //         PositionClass = "bottom"
    //         gridRatio = '12'
    //         break   
    //     default:    
    //         PositionClass = "left"
    //         console.log('props.position = ' + props.position)      
    // }


    return(
        <div className={` ${styles.SideBar} s${gridRatio} ${styles[PositionClass]} col  `}>
            {props.children}
        </div>
    )
}

export default SideBar