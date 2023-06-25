import { useState } from "react";
import { AppContextType, useGlobalContext } from "../AppContext";
import Time from "./Time";
import "../styles/workout-session.css";

function WorkoutSession() {
  const { setIsWorkoutSession } = useGlobalContext() as AppContextType;

  const [workoutName, setWorkoutName] = useState("Workout");

  return (
    <div className="workout-session">
      <header className="workout-session-header">
        <div>
          <p style={{ margin: 0 }}>drop button</p>
          <p style={{ margin: 0 }}>timer button</p>
          {/* <img src="" alt="" />
        <img src="" alt="" /> */}
        </div>
        <button
          className="workout-session-finish-btn"
          onClick={() => setIsWorkoutSession((prevValue) => !prevValue)}
        >
          FINISH
        </button>
      </header>
      <div className="workout-session-info">
        <h2>{workoutName}</h2>
        <Time />
      </div>
    </div>
  );
}

export default WorkoutSession;
