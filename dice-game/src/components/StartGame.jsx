import styled from "styled-components";

function StartGame() {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice image" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  );
}

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

const Button = styled.button`
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 10px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  height: 44px;
  border-radius: 5px;
  font-family: "Poppins", sans-serif;
  transition: background-color 0.3s, color 0.3s ease-in;

  &:hover {
    background-color: #fff;
    color: #000000;
    border: 1px solid #000000;
    transition: background-color 0.3s, color 0.3s ease-in;
  }
`;
