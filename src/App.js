import { useState } from "react";

import { makeStyles } from "@material-ui/core";

import ViewIntro from "./ViewIntro";
import ViewAssembly from "./ViewAssembly";
import ViewConfirm from "./ViewConfirm";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  const [openView, setView] = useState("intro");

  return (
    <div className={classes.container}>
      {openView === "intro" && (
        <ViewIntro onOrder={() => setView("assembly")} />
      )}
      {openView === "assembly" && (
        <ViewAssembly onOrdered={() => setView("confirm")} />
      )}
      {openView === "confirm" && <ViewConfirm />}
    </div>
  );
}

export default App;
