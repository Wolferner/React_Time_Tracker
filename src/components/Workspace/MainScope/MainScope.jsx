import React from "react";
import MainTask from './MainTask/MainTask.jsx'

const datas = [
    {
        title: 'Make a job',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    },
    {
        title: 'Make a Burger',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    },
    {
        title: 'Make a Table',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    },
    {
        title: 'Dancing',
        content: 'i will make a job for some time.i will make a job for some time.i will make a job for some time.i will make a job for some time.',
    }

]

const MainScope = () =>{

    return(
        <div>
            {datas.map(data=>(
                <MainTask data={data}/>
            ))}
        </div>
    )
}

export default MainScope