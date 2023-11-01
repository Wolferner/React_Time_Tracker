import React from 'react'
import SideMenu from './components/SideMenu/SideMenu'
import Menu from './components/Menu/Menu'
import GridBox from './components/GridBox/GridBox.jsx'
import SideBar from './components/SideBar/SideBar'
import Workspace from './components/Workspace/Workspace'
import styles from './App.module.css'
import './main.css'

function App() {
  return (
    <GridBox className={`outline`}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestias quo reprehenderit doloremque in saepe totam voluptatem? Id optio blanditiis quidem minus sunt. Quas ipsa sequi exercitationem consequuntur quo tempora.</p>
      {/* <SideBar gridRatio={1} position = {'left'} className='SideBar'>
        <SideMenu className='SideMenu'/>
      </SideBar>

      <div className={`${styles.Menu} col s2`}>
        <Menu/>
      </div>

      <div className='col s9'>
        <Workspace></Workspace>
      </div> */}

    </GridBox>
  )
}

export default App
