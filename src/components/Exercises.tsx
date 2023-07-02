import exercises from "../assets/exercises.json";
import ExerciseCard from "./ExerciseCard";
import "../styles/exercises.css";

function Exercises() {
  const exerciseCards = exercises.map((exercise) => (
    <ExerciseCard
      key={exercise.id}
      name={exercise.name}
      force={exercise.force}
      equipment={exercise.equipment}
      primaryMuscles={exercise.primaryMuscles}
      secondaryMuscles={exercise.secondaryMuscles}
      instructions={exercise.instructions}
      images={exercise.images}
    />
  ));

  return <div className="exercises">{exerciseCards}</div>;
}

export default Exercises;
