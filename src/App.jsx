import React from 'react'
import SideMenu from './components/SideMenu/SideMenu'
import Menu from './components/Menu/Menu'
import GridBox from './components/GridBox/GridBox.jsx'
import SideBar from './components/SideBar/SideBar'
import Workspace from './components/Workspace/Workspace'
import styles from './App.module.css'


function App() {
  return (
    <GridBox className={`${styles.GridBox}`}>

      <SideBar gridRatio={1} position = {'left'} className='SideBar'>
        <SideMenu className='SideMenu'/>
      </SideBar>

      <div className={`${styles.Menu} col s2`}>
        <Menu/>
      </div>

      <div className='col s9'>
        <Workspace></Workspace>
      </div>

    </GridBox>
  )
}

export default App
