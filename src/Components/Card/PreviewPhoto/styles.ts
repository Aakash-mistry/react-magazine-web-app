import { makeStyles, createStyles } from '@material-ui/styles'

export default makeStyles(() => {
     return createStyles({
          card: {
               maxWidth: 460,
               width: '100%',
               justifyContent: 'center'
          },
          cardButton: {
               float: 'left'
          }
     })
})