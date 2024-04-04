import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
    const {workouts, dispatch} = useWorkoutContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts');
            const jsonParse = await response.json();

            if (response.ok) {
                dispatch({type:'SET_WORKOUTS', payload: jsonParse})
            }
        }

        fetchWorkouts();
    }, [dispatch]);


    return (
        <div className="home">
            <p>{process.env.PORT}</p>
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div>
    );
}

export default Home;