import styled from "styled-components";
import PropTypes from "prop-types";

function NumberSelector({ selectedNum, setSelectedNum, error, setError }) {
  const nums = [1, 2, 3, 4, 5, 6];

  const handleSelectedNum = (num) => {
    setSelectedNum(num);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {nums.map((num, i) => (
          <Box
            $isSelected={num === selectedNum}
            key={i}
            onClick={() => handleSelectedNum(num)}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

NumberSelector.propTypes = {
  selectedNum: PropTypes.number,
  error: PropTypes.string,
  setSelectedNum: PropTypes.any,
  setError: PropTypes.any,
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 700;
  }
  .error {
    color: red;
    font-size: 20px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 52px;
  width: 52px;
  border: 1px solid #000000;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => (props.$isSelected ? "#000000" : "#fff")};
  color: ${(props) => (props.$isSelected ? "#fff" : "#000000")};
`;
