import styled from "styled-components";

function Rules() {
  return (
    <RulesContainer>
      <h3>Rules</h3>
      <div className="text">
        <p>1. Select any number</p>
        <p>2. Click on dice image</p>
        <p>
          3. After click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>4. if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
}

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 18px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 10px;
  h2 {
    font-size: 14px;
  }
  .text {
    margin-top: 5px;
    font-size: 14px;
  }
`;
