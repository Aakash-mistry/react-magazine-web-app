import { makeStyles, createStyles, Theme } from '@material-ui/core'

export default makeStyles((theme: Theme) => {
     return createStyles({
          link: {
               textTransform: 'capitalize',
               textDecoration: 'none',
               color: theme.palette.common.white
          },
          card: {
               borderRadius: '0',
               boxShadow: 'none',
               background: '#3a3a3a',
          }
     })
})