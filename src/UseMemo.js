import { memo } from "react";

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// dùng để tránh component bị re render trong trạng thái ko cần thiết

// Hooks
// HOC
// Render props

function UseMemoTest({count}) {

  
  console.log("re-render");
  // ví dụ component ko re-render khi ko truyền props 
  // return <h1>Hello ...</h1>;

    // ví dụ component re-render khi truyền props 
    return <h1>Hello ... {count}</h1>;
}

export default memo(UseMemoTest);
