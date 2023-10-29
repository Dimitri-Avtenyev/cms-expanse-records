import { LinkProps } from "next/link";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Header.module.css";
import { protomoleculeFont } from "@/pages";

const Header = () => {
  const paths:LinkProps[] = [
    {href: "/"}, {href: "/blog"}, {href: "/the-expanse"}, {href: "/the-expanse/characters"}
  ];

  return (
    <header className={styles.navContainer}>
      <Dropdown paths={paths}/>
      <h1 className={`${protomoleculeFont.className}`}>The expanse records</h1>
      {/* <div className={styles.filler}></div>  */}
    </header>
  )
}

export default Header;