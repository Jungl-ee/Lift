import { useState } from "react";
import { AppContextType, useGlobalContext } from "./AppContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Workout from "./components/Workout";
import Exercises from "./components/Exercises";
import WorkoutSession from "./components/WorkoutSession";

function App() {
  const [page, setPage] = useState("Workout");
  const { isWorkoutSession } = useGlobalContext() as AppContextType;
  return (
    <>
      <Header header={page} />
      <Footer setPage={setPage} />
      {page === "Workout" && <Workout />}
      {page === "Exercises" && <Exercises />}
      {isWorkoutSession && <WorkoutSession />}
    </>
  );
}

export default App;
