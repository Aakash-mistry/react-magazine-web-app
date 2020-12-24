import { makeStyles, createStyles } from '@material-ui/core'

export default makeStyles(() => {
     return createStyles({
          link: {
               textDecoration: 'none',
               textAlign: 'center',
          },
          pageTitle: {
               textAlign: 'center'
          }
     })
})