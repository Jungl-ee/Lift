interface Props {
  name: string;
  force: string | null;
  equipment: string | null;
  primaryMuscles: string[];
  secondaryMuscles: string[];
  instructions: string[];
  images: string[];
}

function ExerciseCard(props: Props) {
  return (
    <div className="exercise-card">
      <img src={props.images[0]} alt="exercise image" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.primaryMuscles}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;
