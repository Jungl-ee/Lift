import "../styles/footer.css";

function Footer({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <footer>
      <div onClick={() => setPage("History")}>
        <p>History</p>
      </div>
      <div onClick={() => setPage("Workout")}>
        <p>Workout</p>
      </div>
      <div onClick={() => setPage("Exercises")}>
        <p>Exercises</p>
      </div>
    </footer>
  );
}

export default Footer;
