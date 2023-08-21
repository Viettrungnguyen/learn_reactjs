import { useEffect, useState } from "react";
//
// Callback luôn được gọi sau khi component mounted
// Cleanup function luôn được gọi trước khi component unmounted
// Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
//
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
// function UseTest() {
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     document.title = title
//     console.log("Mounted");
//   });

//   return (
//     <div>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       {console.log("Render")}
//     </div>
//   );
// }

// export default UseTest;

///////////////////////////////////////////////////////////////////////////////
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// function UseTest() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, []);

//   return (
//     <div>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />
//       {console.log("Render")}

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UseTest;

//////////////////////////////////////////////////////////////////////////////////////
// 3. useEffect(callback, [deps])
// - callback sẽ được gọi lại mỗi khi deps thay đổi
// const tabs = ["posts", "photos", "albums"];
// function UseTest() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//       <br></br>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UseTest;

// 4. useEffect with DOM events
// const tabs = ["posts", "photos", "albums"];
// function UseTest() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowGoToTop(window.scrollY >= 200);
//       console.log("set state");
//     };

//     window.addEventListener("scroll", handleScroll);
//     console.log("addEventlistener...");

//     // Cleanup function
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       console.log("Unmounting.....");
//       console.log("removeEventListener...");
//     };
//   }, []);

//   // console.log("re-render");
//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//       <br></br>
//       <input value={title} onChange={(e) => setTitle(e.target.value)} />

//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>

//       {showGoToTop && (
//         <button
//           style={{
//             position: "fixed",
//             right: 20,
//             bottom: 20,
//           }}
//         >
//           Go to top
//         </button>
//       )}
//     </div>
//   );
// }

// export default UseTest;

// Examples for Cleanup func
// function UseTest() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup func

//     return () => {
//       window.removeEventListener('resize', handleResize)
//     }
//   }, []);

//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   );
// }

// export default UseTest;

// Examples for timer func
// function UseTest() {
//   const [countdown, setCountdown] = useState(180);

//   useEffect(() => {
//     //
//     // setTimeout(() => {
//     //   setCountdown(countdown - 1);
//     //   console.log("Countdown:", countdown);
//     // }, 1000);

// thêm 1 lister vào DOM nên phải ghi nhớ dùng cleanup func để tránh memory leak
//     const timerId = setInterval(() => {
//       setCountdown(countdown - 1);
//       console.log("Countdown:", countdown);
//     }, 1000);

//     return () => clearInterval(timerId);
//   });

//   // Timer func
//   return (
//     <div>
//       <h1>{countdown}</h1>
//     </div>
//   );
// }

// export default UseTest;

// Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)
// function UseTest() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Mounted or Re-render lần ${count}`);

//     // Cleanup func
//     return () => {
//       console.log(`Cleanup lần ${count}`);
//     };
//   }, [count]);

//   // Timer func
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Click me!</button>
//     </div>
//   );
// }

// export default UseTest;

// useEffect() with preview avatar
// function UseTest() {
//   const [avatar, setAvatar] = useState();

//   useEffect(() => {
//     return () => {
//       avatar && URL.revokeObjectURL(avatar.preview);
//     };
//   }, [avatar]);

//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];

//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);

//     console.log(URL.createObjectURL(file));
//   };

//   return (
//     <div>
//       <input type="file" onChange={handlePreviewAvatar} />
//       {avatar && <img src={avatar.preview} alt="" width="100%" />}
//     </div>
//   );
// }

// export default UseTest;

// useEffect() with fake chat app
const lessons = [
  {
    id: 1,
    name: "ReactJS là gì?",
  },
  {
    id: 2,
    name: "SPA/MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow function",
  },
];

function UseTest() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);
  return (
    <div>
      {lessons.map((lesson) => (
        <li
          key={lesson.id}
          style={{
            color: lessonId === lesson.id ? "red" : "#333",
          }}
          onClick={() => setLessonId(lesson.id)}
        >
          {lesson.name}
        </li>
      ))}
    </div>
  );
}

export default UseTest;
