import { makeStyles, Theme, createStyles } from "@material-ui/core";

const drawerWidth = 150;

export default makeStyles((theme: Theme) => {
  return createStyles({
    logo: {
      color: 'grey',
    },
    centered: {
      justifyContent: 'center'
    },
    navLinks: {
      color: theme.palette.common.black,
      textDecoration: "none",
      textTransform: "capitalize",
    },
    navButtons: {
      borderRadius: '1',
      marginTop: 7,
      position: 'absolute',
      right: 20,
      top: 8
    },
    file: {
      display: 'none',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop: '0',
      marginLeft: theme.spacing(18),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: '#fff',
    },
    dropZone: {
      border: '1px dashed red',
      padding: 10,
      borderRadius: 5,
      textAlign: 'center',
      color: 'grey'
    },
    buttonSuccess: {
      backgroundColor: 'green',
      color: '#fff',
      content: 'Uploaded',
      '&:hover': {
        backgroundColor: 'green',
      },
    },
    buttonProgress: {
      color: 'grey',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  });
});
