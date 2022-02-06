export const Task = ({ title, task, id, deleteTask }) => {
  const randomColor = "#"+((1<<24)*Math.random()|0)
  return (
    <div style={{backgroundColor: randomColor}} className="container">
    <div className="tasks">
    <p>{title}</p>
    <p>{task}</p>
    </div>
    <button onClick={() => {deleteTask(id)}}>Remove</button>
    </div>  
    
  );
};
