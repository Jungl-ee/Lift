import { AppContextType, useGlobalContext } from "../AppContext";
import "../styles/workout.css";

function Workout() {
  const { setIsWorkoutSession } = useGlobalContext() as AppContextType;
  return (
    <div className="workout">
      <button
        className="workout-button"
        onClick={() => setIsWorkoutSession((prevValue: boolean) => !prevValue)}
      >
        START AN EMPTY WORKOUT
      </button>
      <div className="my-templates">
        <header>
          <p>My Templates</p>
          <p> + </p>
        </header>
        {/* My templates component */}
      </div>
      <div className="sample-templates">
        <p>Sample Templates</p>
        {/* Sample Templates Component */}
      </div>
    </div>
  );
}

export default Workout;
