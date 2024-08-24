import styled from "styled-components";
import PropTypes from "prop-types";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};
TotalScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 250px;
  text-align: center;
  h1 {
    font-size: 70px;
    line-height: 70px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;
