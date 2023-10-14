import { ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({children}:{children:ReactElement}) => {
  return (
    <div className={styles.container}>
    <Header/>
      <main>{children}</main>
    <Footer/>
    </div>
      
  );
};

export default Layout;