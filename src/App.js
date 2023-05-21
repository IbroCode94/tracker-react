import { useState } from "react";
import Header from "./components/Header";
import Tasks  from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food shoppping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
    //Delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder
    const  toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task))

    }


  return (
    <div className="container">
      <Header />
     {tasks.length> 0 ? (<Tasks tasks={tasks} onDelete=
       {deleteTask} onToggle = {toggleReminder}/>
        ):( "No Task to Show")}
    </div>
  );
}

export default App;
