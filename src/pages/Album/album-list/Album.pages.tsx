import React, { useEffect, useState } from "react";
import { AlbumService } from "../../../services";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import { AlbumCardComponent, AlbumLoader } from "Components";
import Layout from "layouts";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAlbums } from "store/album/albums.selector";
import useStyles from "./styles";

// interface Params {
//      id: string;
// }

const Album: React.FC = (props) => {
     const data = useSelector(selectAlbums);
     const [loading, setLoading] = useState<boolean>(true);
     const classes = useStyles();
     // const params = useParams<Params>();

     useEffect(() => {
          (async () => {
               const response = await AlbumService.getAlbums();
               if (response) {
                    setLoading(false);
               } else {
                    setLoading(true);
               }
          })();
     }, []);

     return (
          <Layout>
               <Box mt={10} p={3}>
                    {loading && (
                         <Box mt={10}>
                              <Grid container spacing={2}>
                                   <Grid item xs={12} md={4}>
                                        <AlbumLoader />
                                   </Grid>
                                   <Grid item xs={12} md={4}>
                                        <AlbumLoader />
                                   </Grid>
                                   <Grid item xs={12} md={4}>
                                        <AlbumLoader />
                                   </Grid>
                              </Grid>
                         </Box>
                    )}
                    {!loading && data.length && (
                         <Box>
                              <Box mb={10} className={classes.pageTitle}>
                                   <Typography variant='h5'>Albums</Typography>
                              </Box>
                              <Box mb={3}>
                                   <Button
                                        color='primary'
                                        variant='outlined'
                                        size='small'>
                                        <Link
                                             to='/albums/create/new-album'
                                             className={classes.link}>
                                             Click here for new album
                                        </Link>
                                   </Button>
                              </Box>
                              <Grid container spacing={3}>
                                   {data.map((element) => (
                                        <Grid
                                             item
                                             xs={12}
                                             key={element._id}
                                             md={4}
                                             lg={4}>
                                             <AlbumCardComponent
                                                  ids={element._id}
                                                  title={element.title}
                                             />
                                        </Grid>
                                   ))}
                              </Grid>
                         </Box>
                    )}
               </Box>
          </Layout>
     );
};

export default Album;
