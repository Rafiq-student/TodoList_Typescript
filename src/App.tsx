import { ChangeEvent, FC, useState } from "react"
import "./App.css"
import { ITask } from "./Interface/Interface";
import TodoTasks from "./Components/TodoTasks";


const App:FC=()=> {
  const [task, setTask]=useState<string>("");
  const [deadline, setDeadline]=useState<number>(0);
  const [todoList, setTodoList]=useState<ITask[]>([])
const handleChange=(event: ChangeEvent<HTMLInputElement>):void=>{
  if(event.target.name==='task'){
    setTask(event.target.value)
  }
  else {

    setDeadline(Number(event.target.value))
  }
};

const finishedTask=(taskNameDeleted:string)=>{
  setTodoList(todoList.filter((task)=>{
    return task.taskName !== taskNameDeleted}))
}
const addTask=()=>{
  const newTask={taskName: task, deadline: deadline}
  setTodoList([...todoList, newTask])
  setTask("")
  setDeadline(0)
 
}

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input type="text" placeholder="Enter Task" name="task" onChange={handleChange} />
            <input type="number" placeholder="Enter Priority"
            value={deadline}
            onChange={handleChange} />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todoList">
          {todoList.map((task: ITask, key: number) => {
            return <TodoTasks key={key} task={task} finishedTask={finishedTask}/>
          })}
        </div>
      </div>
    </>
  )
}

export default App
