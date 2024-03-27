import React from 'react'
import './App.css'
function ListenItems(props) {
  return (
    <div className='tasklist'>
    <div className={props.obj.completed && "completed"}>
    <p id='name'>{props.obj.name}</p>
    <button id='done' onClick={()=>props.onDone(props.obj)}>Done</button>
    <button id='del' onClick={()=>props.onDel(props.obj)}>Delete</button>
    </div>
    </div>

  )
}

export default ListenItems
