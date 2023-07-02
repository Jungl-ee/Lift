import { useRef, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  const exerciseCard = useRef<HTMLDivElement>(null);

  return isOpen ? (
    <div className="exercise-card-info">
      <header>
        <button onClick={() => setIsOpen((prevValue) => !prevValue)}>
          Back
        </button>
        <h4>{`${props.name} (${props.equipment})`}</h4>
      </header>
      <div className="image-container">
        <img src={props.images[0]} alt="" />
        <img src={props.images[1]} alt="" />
      </div>
      <main>
        <p>Instructions:</p>
        <ol>
          {props.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
        <div className="muscle-info">
          {props.force && (
            <p>
              Force: <span>{props.force}</span>
            </p>
          )}
          {props.primaryMuscles && (
            <p>
              Primary Muscles: <span>{props.primaryMuscles}</span>
            </p>
          )}
          {props.secondaryMuscles && (
            <p>
              Scondary Muscles:{" "}
              <span>
                {props.secondaryMuscles.map((muscle) => `${muscle} `)}
              </span>
            </p>
          )}
        </div>
      </main>
    </div>
  ) : (
    <div
      className="exercise-card"
      ref={exerciseCard}
      onClick={() => setIsOpen((prevValue) => !prevValue)}
    >
      <img src={props.images[0]} alt="exercise image" loading="lazy" />
      <div>
        <h4>{props.name}</h4>
        <p>{props.primaryMuscles}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;
