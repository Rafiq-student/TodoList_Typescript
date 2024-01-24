import { ITask } from "../Interface/Interface"

interface Props {
    task:ITask;
    finishedTask(taskNameToDelete:string):void;
}
const TodoTasks = ({task, finishedTask}:Props) => {
  return (
    <div className="task">
        <div className="content">
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>
        <button onClick={()=>finishedTask(task.taskName)}>X</button>
</div>
    
  )
}

export default TodoTasks
