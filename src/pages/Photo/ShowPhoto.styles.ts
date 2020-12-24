import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) => {
  return createStyles({
    cardStyling: {
      background: "#000",
      borderRadius: 20
    },
    cardTitle: {
      color: "#fff",
    },
    heading: {
      color: "#000",
      textAlign: "center",
      marginTop: 50,
      marginBottom: 50,
    },
    menuStylings: {
      boxShadow: "none",
      borderRadius: 0,
    },
    LinkStyling: {
      textTransform: "capitalize",
      color: "#000",
      textDecoration: "none",
    },
    favoriteIcons: {
      color: 'tomato'
    },
    commentIcon: {
      color: 'grey'
    },
    viewIcon: {
      color: 'dodgerblue'
    }
  });
});
