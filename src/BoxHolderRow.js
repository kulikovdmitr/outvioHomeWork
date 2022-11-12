import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    margin: theme.spacing(2, 0),

    display: "grid",
    gridColumnGap: theme.spacing(1),
    gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
  },
}));

function BoxHolderRow({ children }) {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
}

export default BoxHolderRow;
