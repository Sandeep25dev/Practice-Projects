import { useState } from "react";
import StartGame from "./components/StartGame";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>
      <StartGame />
    </>
  );
}

export default App;
