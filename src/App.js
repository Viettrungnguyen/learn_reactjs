// 1. inline css
// 2. App.css
// 3. Chia component
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: "0 32px" }}>
        <Heading />
        <Paragraph />
      </div>

      <div className="d-flex">
        <div>Item 1</div>
        <div>Item 2</div>
      </div>
    </GlobalStyles>
  );
}

export default App;

// Development: npm start / yarn start --> CSS internal
// Production: npm run build / yanr build --> CSS external
