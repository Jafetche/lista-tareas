import React, { useState } from 'react';
import './app.css';

function App() {
  const [activities, setActivities] = useState([]);
  const [activityInput, setActivityInput] = useState('');

  const handleInputChange = (e) => {
    setActivityInput(e.target.value);
  };

  const handleAddActivity = () => {
    if (activityInput) {
      const newActivity = {
        id: new Date().getTime(),
        text: activityInput,
      };

      setActivities([...activities, newActivity]);
      setActivityInput('');
    }
  };

  const handleRemoveActivity = (id) => {
    const updatedActivities = activities.filter((activity) => activity.id !== id);
    setActivities(updatedActivities);
  };

  const handleEditActivity = (id, newText) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, text: newText };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  return (
    <div className="container">
      <h1>ToDo list</h1>
      <div className="activity-input">
        <input type="text" value={activityInput} onChange={handleInputChange} placeholder="Escribe la Tarea" />
        <button onClick={handleAddActivity}>Añadir</button>
      </div>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-item">
            <span>{activity.text}</span>
            <div>
              <button onClick={() => handleRemoveActivity(activity.id)}>Eliminar</button>
              <button onClick={() => handleEditActivity(activity.id, prompt('Enter new text'))}>Editar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
