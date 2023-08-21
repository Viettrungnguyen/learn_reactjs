import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
  const context = useContext(ThemeContext);
  console.log("theme: ", context.theme);
  return (
    <div>
      <h1 className={context.theme}>Test context {context.theme}</h1>
    </div>
  );
}

export default Paragraph;
