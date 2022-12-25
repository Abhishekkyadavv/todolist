import React, { useState } from 'react';
import ToDoList from './ToDoList';
import "./Uicomponent.css";

function Uicomponent() {
  const [inputItem,setInputItem]=useState("");
  const [item,setItem]=useState([]);
  const itemEvent=(event)=>{
    setInputItem(event.target.value);

  };
  const setEvent=()=>{
    setItem((oldItem)=>{
      return [...oldItem,inputItem];
    })
setInputItem("");

  };
  const deleteItem=(id)=>{
    console.log('Clicked');
    setItem((oldItem)=>{
      return oldItem.filter((arrEl,index)=>{
        return index !==id ;
      })
    })
}

  return (
  <>
  <div className='main-div'>
<div className='center-div'>
  <br/>
  <h1>ToDo List</h1>
  <br/>
  <input type="text" placeholder="Add a Item" value={inputItem} onChange={itemEvent} />
  <button onClick={setEvent}> + </button>
  <ol>
    {item.map((itemval,index)=>{
      return <ToDoList text={itemval} key={index} id={index}
      onSelect={deleteItem}/>
    })}
    {/* <li>{inputItem}</li> */}
  </ol>

</div>
  </div>


  </>
  )
}

export default Uicomponent;
