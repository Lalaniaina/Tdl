import React, { useState } from 'react';

function Tdl() {
  const [task, setTask] = useState(''); // État pour la nouvelle tâche
  const [tasks, setTasks] = useState([]); // État pour la liste des tâches

  // Gestionnaire pour ajouter une tâche
  const handleAddTask = () => {
    if (task.trim() !== '') { // Verifie que la valeur entree n'est pas vide
      setTasks([...tasks, task]); // Ajouter la tâche à la liste
      setTask(''); // Réinitialiser l'input
    }
  };

  // Gestionnaire pour supprimer une tâche
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filtrer les tâches pour exclure celle à supprimer
    setTasks(newTasks);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Liste des Tâches</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2 mr-2"
          placeholder="Ajouter une tâche..."
          value={task}
          onChange={(e) => setTask(e.target.value)}// recupere la valeur ajouter a l input
        />
        <button
          className="bg-blue-500 text-white p-2"
          onClick={handleAddTask}
        >
          Ajouter
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{task}</span>
            <button
              className="bg-red-500 text-white p-2"
              onClick={() => handleDeleteTask(index)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tdl;
