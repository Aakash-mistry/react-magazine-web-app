import { makeStyles, createStyles } from '@material-ui/core'

export default makeStyles(() => {
     return createStyles({
          photoCard: {
               maxWidth: 460,
               width: '100%',
          },
          card: {
               margin: 0,
               padding: 0,
          },
          cardTitle: {
               background: 'rgba(0,0,0,0.5)',
               color: '#fff',
               padding: 10,
               textAlign: 'center',
               position: 'absolute',
               borderRadius: 0,
          }
     })
})