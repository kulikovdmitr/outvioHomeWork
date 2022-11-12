import React from 'react';
import { makeStyles, Paper, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPizzaSlice,
  faCheese,
  faBacon,
  faEgg,
} from "@fortawesome/free-solid-svg-icons";

import BoxHolderRow from "./BoxHolderRow";
import Box from "./Box";

const useStyles = makeStyles((theme) => ({
  paperRoot: {
    position: "relative",
    width: "100%",
    marginBottom: theme.spacing(2),

    padding: theme.spacing(1, 2),

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  removeHolder: {
    position: "absolute",
    top: "6px",
    right: "8px",
    fontSize: "20px",

    "&:hover": {
      cursor: "pointer",
      color: "#DC2626",
    },
  },
}));

function PizzaEntry({ data, index, onRemove, onUpdate, disabled }) {
  const classes = useStyles();
  return (
    <Paper classes={{ root: classes.paperRoot }} elevation={3}>
      {!disabled && (
        <div className={classes.removeHolder}>
          <FontAwesomeIcon icon={faTrash} onClick={onRemove} />
        </div>
      )}

      <Typography>Pizza #{index + 1}</Typography>

      <BoxHolderRow>
        <Box
          onClick={() => {
            if (!disabled) {
              onUpdate(index, { size: "small" });
            }
          }}
          active={data.size === "small"}
        >
          <FontAwesomeIcon icon={faPizzaSlice} style={{ fontSize: "14px" }} />
          <span>small</span>
        </Box>
        <Box
          onClick={() => {
            if (!disabled) {
              onUpdate(index, { size: "medium" });
            }
          }}
          active={data.size === "medium"}
        >
          <FontAwesomeIcon icon={faPizzaSlice} onClick={onRemove} />
          <span>medium</span>
        </Box>
        <Box
          onClick={() => {
            if (!disabled) {
              onUpdate(index, { size: "large" });
            }
          }}
          active={data.size === "large"}
        >
          <FontAwesomeIcon icon={faPizzaSlice} style={{ fontSize: "24px" }} />
          <span>large</span>
        </Box>
      </BoxHolderRow>

      <BoxHolderRow>
        <Box
          onClick={() => {
            if (!disabled) {
              onUpdate(index, { topping: "cheese" });
            }
          }}
          active={data.toppings.includes("cheese")}
        >
          <FontAwesomeIcon icon={faCheese} style={{ fontSize: "24px" }} />
          <span>cheese</span>
        </Box>
        <Box
          onClick={() => {
            if (!disabled) {
              onUpdate(index, { topping: "bacon" });
            }
          }}
          active={data.toppings.includes("bacon")}
        >
          <FontAwesomeIcon icon={faBacon} style={{ fontSize: "24px" }} />
          <span>bacon</span>
        </Box>
        <Box
          onClick={() => {
            if (!disabled) {
              onUpdate(index, { topping: "egg" });
            }
          }}
          active={data.toppings.includes("egg")}
        >
          <FontAwesomeIcon icon={faEgg} style={{ fontSize: "24px" }} />
          <span>egg</span>
        </Box>
      </BoxHolderRow>
    </Paper>
  );
}

export default PizzaEntry;
