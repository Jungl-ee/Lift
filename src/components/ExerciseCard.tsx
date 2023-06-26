interface Props {
  name: string;
  bodyPart: string;
  target: string;
  equipment: string;
  gifUrl: string;
}

function ExerciseCard(props: Props) {
  return (
    <div className="exercise-card">
      <img src="" alt="" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.bodyPart}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;
