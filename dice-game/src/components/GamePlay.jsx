import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlinedButton } from "../styled/Button";
import Rules from "./Rules";

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleDiceRoll = () => {
    if (!selectedNum) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(() => randomNumber);

    if (selectedNum === randomNumber) {
      setScore((curScore) => curScore + randomNumber);
    } else {
      setScore((curScore) => (curScore >= 2 ? curScore - 2 : curScore));
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RollDice onRoll={handleDiceRoll} currentDice={currentDice} />
      <div className="btns">
        <OutlinedButton onClick={resetScore}>Reset</OutlinedButton>
        <Button onClick={() => setShowRules((val) => !val)}>
          {showRules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 20px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
