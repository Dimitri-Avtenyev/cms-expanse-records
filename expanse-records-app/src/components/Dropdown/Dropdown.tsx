import { useState } from "react";
import styles from "./Dropdown.module.css";
import Link, { LinkProps } from "next/link";
import { protomoleculeFont } from "@/pages";

const Dropdown = ({paths}:{paths:LinkProps[]}) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  }
  if (!open) {
    return <button onClick={handleClick}>menu</button>
  }
  return (
    <div className={styles.container}>
      <button onClick={handleClick}>menu</button>
      <div className={styles.content}>
      {
        paths.map((path, index) => {
          return (
            <li key={index} className={`${protomoleculeFont.className}`}>
              <Link href={path.href} onClick={() => setOpen(false)}>{path.href.toString()}</Link>
            </li>
          )
        })
      }
       </div>
    </div>
  );
}

export default Dropdown;