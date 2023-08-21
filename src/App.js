import Content from "./Content";
import { ThemeContext } from "./ThemeContext";
import "./App.css";
import { useContext } from "react";

// Context và hook là useContext
// Comp A => Comp B => Comp C
// Đơn giản hoá việc truyền dữ liệu từ component cha sang component con
function App() {
  const context = useContext(ThemeContext);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={context.toggleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}

export default App;
