import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  paperRoot: {
    height: "80px",

    backgroundColor: "#F3F4F6",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",
    userSelect: "none",

    "& > *": {
      marginBottom: "4px",

      "&:last-child": {
        marginBottom: 0,
      },
    },
  },
});

function Box({ active = false, onClick, children }) {
  const classes = useStyles();
  return (
    <Paper
      classes={{ root: classes.paperRoot }}
      elevation={active ? 4 : 0}
      onClick={onClick}
    >
      {children}
    </Paper>
  );
}

export default Box;
