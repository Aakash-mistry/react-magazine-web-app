import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) => {
  return createStyles({
    homeBodyStyle: {
      marginTop: 50,
      padding: 10,
    },
    cardStyles: {
      background: "#444",
      borderRadius: 10,
      boxShadow: "none",
      marginTop: 20,
    },
    watchButton: {
      color: "#ddd",
      textDecoration: "none",
      margin: 8,
    },
    writes: {
      color: "#fff",
    },

    writes2: {
      color: "grey",
    },
  });
});
