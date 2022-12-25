import React from 'react'

function ToDoList(props) {
    


  return (
<>
<button onClick={()=>{
    props.onSelect(props.id);
}}>X</button>
<li>{props.text}</li>
</>
  )
}

export default ToDoList;
