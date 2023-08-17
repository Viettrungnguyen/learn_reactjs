import "./App.css";
import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "Test 1",
  },
  {
    id: 2,
    name: "Test 2",
  },
  {
    id: 3,
    name: "Test 3",
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  console.log(checked);
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
