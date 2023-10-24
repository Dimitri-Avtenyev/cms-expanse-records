import { useEffect, useState } from "react";
import styles from "./Dropdown.module.css";
import Link, { LinkProps } from "next/link";
import { protomoleculeFont } from "@/pages";

const Dropdown = ({ paths }: { paths: LinkProps[] }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (hovered) {
      setTimeout(() => {
        setOpen(false);
        setHovered(false);
      }, 1000);
    } 
  }, [hovered])
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <div className={styles.container} >
      <button className={styles.menu} onClick={handleClick}>
        <img src="/logo.png" alt="logo"></img>
        <p className={`${protomoleculeFont.className}`}>Menu</p>
      </button>
      <div className={styles.content} onMouseLeave={() => {setHovered(true)}} hidden={!open} >
        <ul >
          {
            paths.map((path, index) => {
              let name: string = path.href.toString();
              if (path.href === "/") {
                name = "/Home";
              }
              return (
                <li key={index} className={`${protomoleculeFont.className}`}>
                  <Link href={path.href} onClick={() => setOpen(false)}>{name}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;