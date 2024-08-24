import styled from "styled-components";
import PropTypes from "prop-types";

function RollDice({ currentDice, onRoll }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={onRoll}>
        <img src={`images/dice/dice_${currentDice}.png`} alt="dice image" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
}
RollDice.propTypes = {
  currentDice: PropTypes.number.isRequired,
  onRoll: PropTypes.any,
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
    img {
      width: 200px;
    }
  }
  p {
    font-size: 20px;
  }
`;
