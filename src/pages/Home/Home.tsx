import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./style";
import Layout from "layouts";
import { Box } from "@material-ui/core";
import { PhotoCardComponent, PhotoLoader } from "Components";
import { useSelector } from "react-redux";
import { selectPhotos } from "store/photo/photo.selector";
import { PhotoService } from "services";
// import { useSnackbar } from "notistack";

const Home: React.FC = () => {
     const photos = useSelector(selectPhotos);
     const [loading, setLoading] = useState<Boolean>(true);
     const classes = useStyles();
     // const notification = useSnackbar();

     useEffect(() => {
          // notification.enqueueSnackbar("Welcome to pro magazin web app!", {
          //      variant: "default",
          // });
          (async () => {
               const response = await PhotoService.getPhotos();
               if (response) {
                    setLoading(false);
               } else {
                    setLoading(true);
               }
          })();
     }, []);

     return (
          <Layout>
               <Box mt={10} p={2}>
                    {loading && (
                         <Box>
                              <Grid container spacing={2} justify='center'>
                                   <Grid item xs={12} md={3}>
                                        <PhotoLoader />
                                   </Grid>
                                   <Grid item xs={12} md={3}>
                                        <PhotoLoader />
                                   </Grid>
                                   <Grid item xs={12} md={3}>
                                        <PhotoLoader />
                                   </Grid>
                                   <Grid item xs={12} md={3}>
                                        <PhotoLoader />
                                   </Grid>
                              </Grid>
                         </Box>
                    )}
                    <Grid container spacing={0} justify='center'>
                         {!loading &&
                              photos.length &&
                              photos.map((element) => (
                                   <Grid
                                        className={classes.AnimationFadeOutUp}
                                        item
                                        xs={12}
                                        lg={4}
                                        md={6}
                                        key={element._id}>
                                        <PhotoCardComponent
                                             _id={element._id}
                                             title={element.title}
                                             thumbnailUrl={element.thumbnailUrl}
                                             createdAt={element.createdAt}
                                        />
                                   </Grid>
                              ))}
                    </Grid>
               </Box>
          </Layout>
     );
};

export default Home;
