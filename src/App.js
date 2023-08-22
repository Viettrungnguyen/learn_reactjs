import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div style={{ padding: "0 32px" }}>
      <Button primary />
      <Button />
      <Button disable />
    </div>
  );
}

export default App;
