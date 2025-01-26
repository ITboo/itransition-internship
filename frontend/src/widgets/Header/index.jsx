import { IconButton } from "../../shared/Button";
import { Logo } from "../../shared/Logo";

import styles from "./style.module.css";

const Header = () => {
  
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.buttons}>
        <IconButton model="table" />
        <IconButton
          model="gallery"
        />
      </div>
    </header>
  );
};

export default Header;
