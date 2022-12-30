import React from 'react';
import { useEffect, useState } from 'react';
import { API_URL } from '../App';

// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

function Home() {
    const [workouts, setWorkouts] = useState(null);

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch(`${API_URL}/api/workouts`);
            const json = await response.json();
            console.log(json);
            if (response.ok){
                setWorkouts(json);
            }
        }

        fetchWorkouts();

    }, []);

  return (
    <div className='Home'>
        <div className="Home__workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} />
            ))}
        </div>
        <WorkoutForm />
    </div>
  )
}

export default Home
