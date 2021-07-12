import React,{useState} from 'react';
import './ToDo.css';


const ToDo = () =>{


const enter= (event)=>{
    if (event.keyCode === 13) {
        document.getElementById("mybtn").click();
       }
}




    const [list, setVal] = useState("")
const [listData, setadd] = useState([])
const onInput=(e)=>{
// let inD = e.target.value
    setVal(e.target.value);

}
const onClick=()=>{

if(list==""){
    alert("Invalid input*")

}
else{
    setadd((oldList)=>{
        return [...oldList,list]
    });
    setVal("");
}

    
   

}

const onDelete=(id)=>{

    setadd((oldList)=>{
        return oldList.filter((arr,indexVal)=>{
            return (
                
                id.target.id!=indexVal)
        })
    })
}

    return (
<>
<div className="todo-box">
    <h2 className="title">
        ToDos List
    </h2>
    <div className="input-box">
        <input autoFocus onKeyUp={enter} type="text" placeholder="Tell me Your Task?" id="input" onChange={onInput} value={list}/>
        <button id="mybtn" onClick={onClick}><i class="fa fa-plus" aria-hidden="true"></i></button>
    </div>
    <div className="list-box">
        <ul className="list">
        
{
    listData.map((listVal,indexVal)=>{
        return <li> <button onClick={onDelete} ><i id={indexVal}class="fa fa-times" aria-hidden="true"></i></button><p>{listVal}</p></li>
        
        
    })
}

        </ul>
    </div>
</div>
</>
    )
}

export default ToDo;