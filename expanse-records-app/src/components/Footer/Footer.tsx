import styles from "./Footer.module.css";


const Footer = () => {
  const year: string = new Date().getFullYear().toString();
  return (
    <footer className={styles.container}>
        <p> &copy; {year} |
          <a href="https://github.com/Dimitri-Avtenyev/cms-expanse-records" target="_blank"> <img src={"/githubLogo.png"}></img> Dimitri Avtenyev 
          </a>
        </p>
    </footer>
  )
}

export default Footer;