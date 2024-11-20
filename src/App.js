import React, { useState } from "react";
import "./App.css"; // Importa os estilos

function App() {
  // Estado para as tarefas e para a nova tarefa
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Adicionar uma nova tarefa
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask(""); // Limpa o campo de entrada
    }
  };

  // Alternar tarefa como concluída/não concluída
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Remover uma tarefa
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="task-container">
      <h1>Lista de Tarefas</h1>
      {/* Campo de entrada e botão de adicionar */}
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} // Atualiza o estado do input
          placeholder="Adicione uma nova tarefa"
        />
        <button onClick={addTask}>Adicionar</button>
      </div>
      {/* Lista de tarefas */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span
              className={`icon ${task.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "✔️" : "⬜"}
            </span>
            <span
              className={`task-name ${task.completed ? "completed" : ""}`}
              onClick={() => toggleComplete(index)}
            >
              {task.name}
            </span>
            <button onClick={() => removeTask(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
