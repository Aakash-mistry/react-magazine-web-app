import React from "react";
import {
     Card,
     CardActionArea,
     CardActions,
     CardMedia,
     Button,
     Typography,
     Grid,
     CardContent,
} from "@material-ui/core";
import useStyles from "./style";
import { Link } from "react-router-dom";
import Layout from "layouts";

const Home: React.FC = () => {
     const classes = useStyles();
     return (
          <Layout>
               <div className={classes.homeBodyStyle}>
                    <Grid container spacing={2} justify='center'>
                         <Grid item xs={12} lg={4} style={{ marginTop: 20 }}>
                              <Card className={classes.cardStyles}>
                                   <CardActionArea>
                                        <CardMedia
                                             component='img'
                                             image='https://images.pexels.com/photos/3534160/pexels-photo-3534160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                             title='View all photos'
                                        />
                                        <CardContent>
                                             <Typography
                                                  className={classes.writes}
                                                  gutterBottom
                                                  variant='h5'
                                                  component='h2'>
                                                  Photos
                                             </Typography>
                                             <Typography
                                                  className={classes.writes2}
                                                  variant='body2'
                                                  color='textSecondary'
                                                  component='p'>
                                                  Placeholder Images to watch
                                                  just for something that blow
                                                  your mind...
                                             </Typography>
                                        </CardContent>
                                   </CardActionArea>
                                   <CardActions>
                                        <Button size='small' color='primary'>
                                             <Link
                                                  to='/photos'
                                                  className={
                                                       classes.watchButton
                                                  }>
                                                  Show
                                             </Link>
                                        </Button>
                                   </CardActions>
                              </Card>
                         </Grid>

                         <Grid item xs={12} lg={4} style={{ marginTop: 20 }}>
                              <Card className={classes.cardStyles}>
                                   <CardActionArea>
                                        <CardMedia
                                             component='img'
                                             height='310'
                                             image='https://images.pexels.com/photos/4482872/pexels-photo-4482872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                                             title='View all albums'
                                        />
                                        <CardContent>
                                             <Typography
                                                  className={classes.writes}
                                                  gutterBottom
                                                  variant='h5'
                                                  component='h2'>
                                                  Albums
                                             </Typography>
                                             <Typography
                                                  className={classes.writes2}
                                                  variant='body2'
                                                  color='textSecondary'
                                                  component='p'>
                                                  Placeholder Images to watch
                                                  just for something that blow
                                                  your mind...
                                             </Typography>
                                        </CardContent>
                                   </CardActionArea>
                                   <CardActions>
                                        <Button size='small' color='primary'>
                                             <Link
                                                  to='/albums'
                                                  className={
                                                       classes.watchButton
                                                  }>
                                                  Show
                                             </Link>
                                        </Button>
                                   </CardActions>
                              </Card>
                         </Grid>
                    </Grid>
               </div>
          </Layout>
     );
};

export default Home;
