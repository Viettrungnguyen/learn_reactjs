import { memo, useCallback } from "react";

// 2. useCallback()
// - Reference types
// - React memo()
// tránh tạo ra hàm mới không cần thiết trong component

function UseCallbackTest({ onIncrease }) {
  console.log("re-render");
  // ví dụ component ko re-render khi ko truyền props
  // return <h1>Hello ...</h1>;

  // ví dụ component re-render khi truyền props
  return (
    <>
      <h2>helloooo</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(UseCallbackTest);
