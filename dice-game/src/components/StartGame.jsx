import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../styled/Button";

function StartGame({ toggle }) {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
}

StartGame.propTypes = {
  toggle: PropTypes.func.isRequired, // This validates that 'toggle' is a required function
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  /* Using SASS */
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
