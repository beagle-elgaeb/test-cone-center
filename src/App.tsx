import styled from "styled-components/macro";
import DateInput from "./DateInput/DateInput";

function App() {
  return (
    <Container>
      <DateInput />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
