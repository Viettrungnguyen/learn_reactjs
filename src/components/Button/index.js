import clsx from "clsx";
import styles from "./Button.module.css";

// dùng 2 cách dưới code sẽ dài --> nên sử dụng 1 trong 2 thư viện
// classnames (old)
// clsx
function Button({ primary }) {
  const classes = clsx(styles.btn, "d-flex", {
    [styles.primary]: primary,
  });

  return (
    <>
      <button className={classes}>Click me 1!</button>

      {/* template string */}
      {/* <button className={`${styles.btn} ${styles.active}`}>Click me 2!</button> */}

      {/* Xử lý mảng */}
      {/* <button className={[styles.btn, styles.active].join(" ")}>
        Click me 3!
      </button> */}

      {/*  clsx   */}
      {/* <button className={clsx(styles.btn, styles.active)}>Click me 4!</button> */}
      {/* với thuộc tính class ko cố định sẽ truyền dưới dạng object */}
      {/* <button className={clsx(styles.btn, { [styles.active]: false })}>
        Click me 5!
      </button> */}
    </>
  );
}

export default Button;
