import { Button, DarkButton } from "./components/Button.styled";
import Flex from "./components/Flex";

const App = () => {
  return (
    <>
      <Flex>
        <h1>Styled Components</h1>
        <Button>Tikla</Button>
        <DarkButton>Send</DarkButton>
      </Flex>
      <Flex bg="tomato">
        <h1>PROPS</h1>
      </Flex>
    </>
  );
};

export default App;
