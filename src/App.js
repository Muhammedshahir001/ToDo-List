import React from "react";
import { useState } from "react";
import "./App.css";


function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState('');
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
      const today = new Date();
      const dayOfWeek = today.getDay();
      const dayName = daysOfWeek[dayOfWeek];
      function addTodo(){
        const isDuplicate = todos.some((obj)=> obj.text === todo);
        if (isDuplicate) {
          alert("Todo Already Exists!");
          return;
        }
        if(todo.trim()){
          setTodos([...todos, {id:Date.now(), text:todo.trim(), status:false}]);
          setTodo("")
        }else{
          alert("Empty value")
        }
      }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Hey Welcome, it's {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       {
        todos.map((obj)=>{

          return (<div className="todo" key={obj.id}>
          <div className="left">
            <input  onChange={(e)=>{
              setTodos(todos.map(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked;
                }
                return obj2
              }))


            }}
             value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i  onClick={()=>{
              setTodos(todos.filter((obj2)=>obj2.id !==obj.id));

            }}
             className="fas fa-times"></i>
          </div>
        </div>
        );
        }) }
        <h4 style={{color:"white" , marginTop:"20px"}}>Active Status</h4>

        {todos.map((obj)=>{
          if(obj.status){
            return (
              <div className="input" key={obj.id}>
                <input value={obj.text} type="text" />
              </div>
            );
          }
          return null

        })}
      </div>
    </div>
  );
}

export default App;
