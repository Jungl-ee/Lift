import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("Workout");

  return (
    <>
      <Header header={page} />
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
