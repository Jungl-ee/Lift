import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Workout from "./components/Workout";

function App() {
  const [page, setPage] = useState("Workout");

  return (
    <>
      <Header header={page} />
      <Footer setPage={setPage} />
      {page === "Workout" && <Workout />}
    </>
  );
}

export default App;
