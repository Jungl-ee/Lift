import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Workout from "./components/Workout";
import WorkoutSession from "./components/WorkoutSession";
import { AppContextType, useGlobalContext } from "./AppContext";

function App() {
  const [page, setPage] = useState("Workout");
  const { isWorkoutSession } = useGlobalContext() as AppContextType;
  return (
    <>
      <Header header={page} />
      <Footer setPage={setPage} />
      {page === "Workout" && <Workout />}
      {isWorkoutSession && <WorkoutSession />}
    </>
  );
}

export default App;
