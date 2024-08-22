import styled from "styled-components";

function RollDice() {
  return (
    <DiceContainer>
      <div className="dice">
        <img src="/images/dice/dice_1.png" alt="dice image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
