import { memo, useMemo, useRef, useState } from "react";

function UseMemoHookTest({ count }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);
    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  // bị tính lại ko cần thiết
  // const total = products.reduce((result, prod) => {
  //   console.log("Tính toán lại....");

  //   return result + prod.price;
  // }, 0);

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("Tính toán lại...");
      return (result = prod.price);
    }, 0);

    return result;
  }, [products]);

  console.log(products);
  return (
    <div>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default memo(UseMemoHookTest);
