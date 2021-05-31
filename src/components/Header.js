import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider, CircularProgress } from "@material-ui/core";
import TimelineIcon from "@material-ui/icons/Timeline";

import { useContext } from "react";
import { DataContext } from "./DataProvider.js";

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    padding: "0px 8px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    color: "#00a8ff",
  },
  headerDivider: { margin: "0px 8px" },
  headerIcon: {
    border: "1px #ecf0f1 solid",
    padding: "8px",
    borderRadius: "8px",
    margin: "0px 8px",
  },
  title: {
    padding: "24px 0px",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const { loading } = useContext(DataContext);
  return (
    <div>
      <div className={classes.mainHeader}>
        <TimelineIcon className={classes.headerIcon} />
        <Divider
          orientation="vertical"
          flexItem
          className={classes.headerDivider}
          variant="fullWidth"
        />
        <Typography variant="h5" className={classes.title}>
          Data-chart
          {loading && <CircularProgress color="inherit" size={20} />}
        </Typography>
      </div>
      <Divider />
    </div>
  );
};

export default Header;
