import { useState } from "react";
import styled from "styled-components";

function NumberSelector() {
  const nums = [1, 2, 3, 4, 5, 6];
  const [selectedNum, setSelectedNum] = useState();

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {nums.map((num, i) => (
          <Box
            isSelected={num === selectedNum}
            key={i}
            onClick={() => setSelectedNum(num)}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid #000000;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000000")};
`;
