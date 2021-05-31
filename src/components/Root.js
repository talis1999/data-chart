import DataChart from "./DataChart.js";
import Header from "./Header.js";
import { makeStyles } from "@material-ui/core/styles";

import { useContext } from "react";
import { DataContext } from "./DataProvider.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Root = () => {
  const classes = useStyles();
  const { loading } = useContext(DataContext);
  return (
    <div className={classes.root}>
      <Header />
      {!loading && <DataChart />}
    </div>
  );
};

export default Root;
