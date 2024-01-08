import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Amin`s Page
      </Link>
      <ul className={styles.list}>
        <li>
          <NavLink className={styles.item} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/contac">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/project">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.item} to="/edu">
            Gallery
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
