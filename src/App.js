import React,{useState} from 'react'
import ListenItems from './ListenItems'
import './App.css'
function App() {

  const [todoname,settodoname]=useState("")

  const[tcount,settcount]=useState(0)
  const[ccount,setccount]=useState(0)
  const[rcount,setrccount]=useState(0)

  const[list, setList]=useState([])

  const updatetodoname = (e) =>
  {
   settodoname(e.target.value)
  }

  const addtodo = () =>
  {
    setList([...list,
      {
        name:todoname,
        completed:false,
      }
    ]);
    settodoname("")
    settcount(tcount+1);
    setrccount(rcount+1);

  }
 
  const onDone = item =>{
    let newlist=list.map(ListItems => {
      if(ListItems.name === item.name)
      {
        return{...ListItems,completed:!ListItems.completed};
      }
      else
      return ListItems;
    })

    setList(newlist);
    setccount(ccount+1);
    setrccount(rcount-1);
    
  }
  
  const onDel =item =>
  {
    let newlist=list.filter(ListItems => {
      if(ListItems.name === item.name)
      {
        return false;
      }
      else
      return true;
    })

    setList(newlist);
    settcount(tcount-1);
    setccount(ccount-1);
    
    let setrccount=(preState => {
      if(settcount===setrccount){
        return{
          rcount:rcount-1
        }
      }
      else{
        return{
          rcount:rcount
        }
      }
    })
  }
  return (
    <div>
    <div className="head" >
        <div id="today">Today</div>
    <input
       id='input'
       type='text'
       placeholder='eg. Buy groceries'
       value={todoname}
       onChange={updatetodoname}
    ></input>


    
    <button id='submit' onClick={addtodo}>Add Task</button>
    </div>
    
    <div id='options'>
      <ol>
         <li>
              <span id='subopt'>Remaining</span>
              <span id='subcount'> {rcount}</span>
         </li>
         <li>
              <span id='subopt'>Completed</span>
              <span id='subcount'> {ccount}</span>
         </li>
         <li>
              <span id='subopt'>Total</span>
              <span id='subcount'> {tcount}</span>
         </li>
      </ol>
    </div>
    {
      list.map(item => <ListenItems obj={item} onDone={onDone}  onDel={onDel}/>)
    }
    </div>
  )
}

export default App



