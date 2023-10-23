import { LinkProps } from "next/link";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  const paths:LinkProps[] = [
    {href: "/"}, {href: "/blog"}, {href: "/the-expanse"}
  ];

  return (
    <header>
      <Dropdown paths={paths}/>
    </header>
  )
}

export default Header;