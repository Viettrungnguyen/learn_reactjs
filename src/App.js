import { useState } from "react";
import UseTest from "./UseEffect.js";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>

      {/* {show && <Content />} */}
      {show && <UseTest />}
    </div>
  );
}

export default App;
