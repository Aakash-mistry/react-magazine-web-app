import { makeStyles, Theme, createStyles } from '@material-ui/core'

export default makeStyles((theme: Theme) => {
     return createStyles({
          link: {
               color: 'red',
               textDecoration: 'none'
          },
          cardComment: {
               background: '#f5f5f5',
               padding: 15
          }
     })
})