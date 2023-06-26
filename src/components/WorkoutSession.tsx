import React, { useState } from "react";
import { AppContextType, useGlobalContext } from "../AppContext";
import Time from "./Time";
import "../styles/workout-session.css";

function WorkoutSession() {
  const { setIsWorkoutSession } = useGlobalContext() as AppContextType;

  const [workoutName, setWorkoutName] = useState("Workout");

  function editWorkoutName(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setWorkoutName(value);
  }

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
        <input type="text" value={workoutName} onChange={editWorkoutName} />
        <Time />
      </div>
      <div className="workout-session-options">
        <button>ADD EXERCISE</button>
        <button>CANCEL WORKOUT</button>
      </div>
    </div>
  );
}

export default WorkoutSession;
