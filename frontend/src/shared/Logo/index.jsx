import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import styles from './style.module.css'
import { Typography } from "@mui/material";

export const Logo = () => {
    return (
        <div className={styles.logo}>
          <AutoStoriesIcon />
          <Typography variant="h5">Task #5</Typography>
        </div>
    );
  };