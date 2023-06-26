import exercises from "../assets/exercises.json";
import ExerciseCard from "./ExerciseCard";
import "../styles/exercises.css";

function Exercises() {
  const exerciseCards = exercises.map((exercise) => (
    <ExerciseCard
      key={exercise.id}
      name={exercise.name}
      bodyPart={exercise.bodyPart}
      target={exercise.target}
      equipment={exercise.equipment}
      gifUrl={exercise.gifUrl}
    />
  ));

  return <div className="exercises">{exerciseCards}</div>;
}

export default Exercises;
