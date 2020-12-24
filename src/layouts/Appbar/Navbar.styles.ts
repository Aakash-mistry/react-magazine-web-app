import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      flexGrow: 1,
    },
    navbarBackground: {
      background: "#1E90FF",
      boxShadow: "none",
    },
    navLinks: {
      color: "#fff",
      textDecoration: "none",
      textTransform: "capitalize",
    },
    navButtons: {
      position: "absolute",
      right: 10,
      marginTop: 10,
    },
  });
});
