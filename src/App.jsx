import { useState } from "react";

import "./App.css";
import Startgame from "./components/Startgame";
import Gameplay from "./components/Gameplay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {isGameStarted ? (
        <Gameplay />
      ) : (
        <Startgame setIsGameStarted={setIsGameStarted} />
      )}
    </>
  );
}

export default App;
