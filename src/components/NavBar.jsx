import { NavLink, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

import { useState } from "react";

function NavBar() {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Mostapha M Amin
      </Link>

      <ul className={active ? styles.open : styles.list}>
        <li>
          <NavLink className={styles.item} to="/about">
            About Me
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
      <img
        src="/menu.png"
        className={styles.buttom}
        onClick={() => {
          setActive(!active);
        }}
      />
    </div>
  );
}

export default NavBar;
