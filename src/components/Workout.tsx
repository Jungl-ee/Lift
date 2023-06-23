import "../styles/workout.css";

function Workout() {
  return (
    <div className="workout">
      <button className="workout-button">START AN EMPTY WORKOUT</button>
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
