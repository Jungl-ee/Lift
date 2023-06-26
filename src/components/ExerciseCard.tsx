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
      <img src={props.gifUrl} alt="" />
      <h4>{props.name}</h4>
    </div>
  );
}

export default ExerciseCard;
