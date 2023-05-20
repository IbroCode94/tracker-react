import { useState } from "react";
import Header from "./components/Header";
import Tasks  from "./components/Tasks";

function App() {
  const [tasks, setasks] = useState([
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
  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
