import { ReactElement } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}:{children:ReactElement}) => {
  return (
    <>
    <Header/>
      {children}
    <Footer/>
    </>
      
  );
};

export default Layout;