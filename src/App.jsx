import React, { useReducer } from "react";
import styled from "styled-components";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "incrementBy1":
      return { count: state.count + 1 };
    case "incrementBy10":
      return { count: state.count + 10 };
    case "incrementBy20":
      return { count: state.count + 20 };
    case "decrementBy1":
      return { count: state.count - 1 };
    case "decrementBy3":
      return { count: state.count - 3 };
    case "decrementBy7":
      return { count: state.count - 7 };
    case "resetCounter":
      return { count: 0 };
    default:
      return state;
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ResetButton = styled(Button)`
  background-color: #f44336;

  &:hover {
    background-color: #e53935;
  }
`;

const CounterApp = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <Container>
      <Title>Counter: {state.count}</Title>
      <Button 
        onClick={() => dispatch({ type: "incrementBy1" })} 
        disabled={state.count >= 40}
      >
        +1
      </Button>
      <Button 
        onClick={() => dispatch({ type: "incrementBy10" })} 
        disabled={state.count >= 40}
      >
        +10
      </Button>
      <Button 
        onClick={() => dispatch({ type: "incrementBy20" })} 
        disabled={state.count >= 40}
      >
        +20
      </Button>
      <Button 
        onClick={() => dispatch({ type: "decrementBy1" })} 
        disabled={state.count <= 0}
      >
        -1
      </Button>
      <Button 
        onClick={() => dispatch({ type: "decrementBy3" })} 
        disabled={state.count <= 0}
      >
        -3
      </Button>
      <Button 
        onClick={() => dispatch({ type: "decrementBy7" })} 
        disabled={state.count <= 0}
      >
        -7
      </Button>
      <ResetButton onClick={() => dispatch({ type: "resetCounter" })}>
        Reset
      </ResetButton>
    </Container>
  );
};

export default CounterApp;
