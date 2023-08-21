import { useRef, useState, useEffect } from "react";

// Lưu các giá trị qua 1 tham chiếu bên ngoài
// function component
// do mỗi lần rerender lại thì js luôn set lại các biến nên sau lần chạy đầu tiên
// biên timerid sẽ thành undefined

// bài tập thêm: In ra giá trị hiện tại và trước đó của state

function UseRefTest() {
  const [count, setCount] = useState(60);

  // luôn trả về 1 object có 1 property là current --> ref.current
  const ref = useRef(99);
  console.log(ref);

  // Áp dụng vào bài toán
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  useEffect(() => {
    const rect = h1Ref.current.getBoundingCientRect()

    console.log(rect);
    console.log(h1Ref.current);
  })

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    console.log("Start -> ", timerId.current);
  };

  const handleStop = () => {
    clearInterval(timerId.current);

    console.log("Stop -> ", timerId.current);
  };

  console.log(count, prevCount.current);

  return (
    <div>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRefTest;
