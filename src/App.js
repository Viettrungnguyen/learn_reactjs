import { useCallback, useState } from "react";
import UseMemoHook from "./UseMemoHook";
import UseReducer from "./UseReducer";
// import UseMemoTest from "./UseMemo";
// import UseCallbackTest from "./UseCallback";

function App() {
  // const [show, setShow] = useState(false);
  // return (
  //   <div>
  //     <button onClick={() => setShow(!show)}>Toggle</button>

  //     {/* {show && <Content />} */}
  //     {show && <UseMemoTest />}
  //   </div>
  // );

  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0)

  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };

  // const handleIncrease = useCallback(() => {
  //   setCount((prevCount) => prevCount + 1);
  // }, []);

  // const handleIncrease2 = () => {
  //   setCount2(count2 + 1)
  // }

  // // Ví dụ cho không re render khi component ko thay đổi
  // return (
  //   <div>
  //     {/* <UseMemoTest /> */}
  //     <UseCallbackTest onIncrease={handleIncrease} />
  //     <h1>{count}</h1>
  //     {/* <button onClick={handleIncrease}>Click me!</button> */}
  //   </div>
  // );

  // Ví dụ cho re render khi component nhận prop và thay đổi
  // return (
  //   <div>
  //     <UseMemoTest count={count}/>
  //     <h1>{count}</h1>
  //     <h1>{count2}</h1>
  //     <button onClick={handleIncrease}>Click me!</button>

  //     {/* khong truyen props count2 nen ko re-render */}
  //     <button onClick={handleIncrease2}>Click me 2!</button>
  //   </div>
  // )

  // useMemo() Hook
  // return <UseMemoHook />;
  return <UseReducer />;
}

export default App;
