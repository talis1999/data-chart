import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { useContext } from "react";
import { DataContext } from "./DataProvider.js";

export default function TimeUnitTabs() {
  const { timeUnit, setTimeUnit } = useContext(DataContext);

  const handleChange = (event, newValue) => {
    setTimeUnit(newValue);
  };

  const generateTabs = () =>
    ["1 minute", "5 minutes", "1 hour", "1 week"].map((timeUnit) => (
      <Tab id={timeUnit} label={timeUnit} />
    ));

  return (
    <Paper square>
      <Tabs
        value={timeUnit}
        indicatorColor="primary"
        style={{ color: "#00a8ff" }}
        onChange={handleChange}
        aria-label="time-unit-tabs"
      >
        {generateTabs()}
      </Tabs>
    </Paper>
  );
}
