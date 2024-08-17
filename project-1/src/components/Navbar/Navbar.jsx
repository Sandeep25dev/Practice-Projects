import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="logo" style={{ height: "70px" }} />
      </div>
      <ul className={styles.navbar}>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
