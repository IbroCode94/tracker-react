const Task = () => {
    return (
        <div className="task">
           {tasks.map((task) => (
             <h3 key={task.id}>{task.text}</h3>

           ))}

        </div>
    )
}
export default  Task