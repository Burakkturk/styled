import { Button, DarkButton } from "./components/Button.styled";
import { Flex } from "./components/Flex.jsx";

const App = () => {
  return (
    <>
      <Flex>
        <h1>Styled Components</h1>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>
    </>
  );
};

export default App;
