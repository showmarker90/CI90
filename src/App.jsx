import "./App.css";
import Button from "./components/Button";
import Text from "./components/Text";

const App = () => {
  return (
    <div>
      <Button type={"primary"} color={"red"} />
      <Button type={"secondary"} color={"blue"} />
      <Button type={"white"} />
    </div>
  );
};

export default App;
