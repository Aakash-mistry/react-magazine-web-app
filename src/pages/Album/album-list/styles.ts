import { makeStyles, createStyles, } from "@material-ui/styles";

export default makeStyles(() => {
     return createStyles({
          pageTitle: {
               justifyContent: 'center',
               display: 'flex'
          },
          link: {
               textDecoration: 'none',
          }
     })
})