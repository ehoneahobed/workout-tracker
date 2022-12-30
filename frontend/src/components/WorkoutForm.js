import React, { useState } from 'react'
import { API_URL } from '../App';

function WorkoutForm() {
    const [title, setTitle] = useState('');
    const [load, setLoad] = useState('');
    const [reps, setReps] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workout = {title, load, reps};

        const response = await fetch(`${API_URL}/api/workouts`, {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
        }
        else {
            setError(null);
            setTitle('');
            setLoad('');
            setReps('');
            console.log('new workout added', json);
        }

    
    }

  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Excercise Title:</label>
        <input 
            type="text"
            onChange = {(e) => setTitle(e.target.value)}
            value={title}
            required
        />
        <label>Load (in kg):</label>
        <input 
            type="number"
            onChange = {(e) => setLoad(e.target.value)}
            value={load}
            required
        />
        <label>Reps:</label>
        <input 
            type="number"
            onChange = {(e) => setReps(e.target.value)}
            value={reps}
            required
        />
        <button type='submit'>Add Workout</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm