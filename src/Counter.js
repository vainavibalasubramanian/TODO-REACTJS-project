import React,{useState} from 'react'

const Counter = () => {
  const[count,setcount]=useState(0);

  const handleIncrement = () =>
  {
    setcount(count+1)
  }
  const handle = () =>
  {
    if(count>0){
    setcount(count-1)
    }
    else
    setcount(0)
  }
  return (
    <div>
    <button onClick={handleIncrement}>+</button>
    {count}
    <button onClick={handle}>-</button>
    </div>
  )
}

export default Counter