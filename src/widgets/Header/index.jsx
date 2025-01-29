import { IconButton } from "../../shared/Button";
import { Logo } from "../../shared/Logo";

import styles from "./style.module.css";

const Header = ({setViewMode}) => {
  
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.buttons}>
        <IconButton model="table" onClick={() => setViewMode('table')}></IconButton>
        <IconButton
          model="gallery"
          onClick={() => setViewMode('gallery')}
        />
      </div>
    </header>
  );
};

export default Header;
