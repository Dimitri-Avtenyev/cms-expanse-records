import { MouseEventHandler } from "react";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const handleClick:MouseEventHandler<HTMLButtonElement> = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <button className={styles.btn} onClick={handleClick}>
      <img src={"/arrow.png"}></img>
    </button>
  );
};

export default BackToTop;