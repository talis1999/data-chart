import { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

import { DataContext } from "./DataProvider.js";
import timeUnits from "../utils/timeUnits.js";

export default function TimeUnitMenu() {
  const { timeUnit, setTimeUnit } = useContext(DataContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const generateMenuItems = () =>
    Object.keys(timeUnits).map((key) => (
      <MenuItem
        id={key}
        onClick={() => {
          handleClose();
          setTimeUnit(key);
        }}
      >
        {key}
      </MenuItem>
    ));

  return (
    <div>
      <Button
        aria-controls="timeUnit-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ display: "flex", color: "#1976d2" }}
      >
        <AccessTimeIcon />
        {timeUnit}
      </Button>
      <Menu
        id="timeUnit-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {generateMenuItems()}
      </Menu>
    </div>
  );
}
