// 1. inline css
// 2. App.css
// 3. Chia component
import "./App.css";

function App() {
  return (
    <div style={{ padding: "0 32px" }}>
      <h1 className="heading">CSS</h1>
    </div>
  );
}

export default App;

// Development: npm start / yarn start --> CSS internal
// Production: npm run build / yanr build --> CSS external
