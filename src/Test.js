import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const users=[
  {
    id:1,
    name:"hasib",
    age:22,
  },
  {
    id:2,
    name:"hasnat",
    age:22,
  },
]


function App() {
  const [userList,setUserList]=useState(users)

  const [newUser,setNewUser]=useState("")
  const [newAge,setNewAge]=useState()
  const [id,setId]=useState(3)
  const handleClick =()=>{
    setId(id+1)
   setUserList([...userList,{name:newUser,age:newAge}])
   setNewUser("");
   setNewAge("")
  }
  const handleDelete =(id)=>{
   setUserList(userList.filter((prev)=>prev.id !==id))
  }
  

 

  
  return (
    <div className="App">
      <div>
        <label> userName</label>
      <input type="text" value={newUser} onChange={(e)=>setNewUser(e.target.value)} />
      <br /> 
      <label >Age</label>
      <input type="text" value={newAge} onChange={(e)=>setNewAge(e.target.value)} /> 
      </div>
   
      <button onClick={handleClick} >Add</button>
     
   {userList?.map((user)=><div key={user?.id}><li> name: {user?.name} age: {user?.age}</li> 
   <button onClick={()=> handleDelete(user?.id)}> delete</button>
   </div>)}
   
    </div>
  );
     
     
  }
 
  


export default App;
