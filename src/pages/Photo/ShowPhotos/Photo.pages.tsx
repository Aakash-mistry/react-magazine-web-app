import React, { useEffect, useState } from "react";
import { PhotoService } from "services";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// import useStyles from "./ShowPhoto.styles";
import { Grid, Box, Typography, Button } from "@material-ui/core";

// Importing Component
import { PhotoCardComponent, PhotoLoader } from "../../../Components/";
import Layout from "layouts";
import { selectPhotos } from "store/photo/photo.selector";
import useStyles from "./styles";
import { CloudUploadRounded } from "@material-ui/icons";

const ShowPhotos: React.FC = (props) => {
     const classes = useStyles();
     const data = useSelector(selectPhotos);
     const [loading, setLoading] = useState<boolean>(true);

     // useEffect state manage
     useEffect(() => {
          (async () => {
               const response = await PhotoService.getPhotos();
               if (response) {
                    setLoading(false);
               } else {
                    setLoading(true);
               }
          })();
     }, []);

     // Stylings
     return (
          <Layout>
               <Box mt={10}>
                    {loading && (
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
                    )}

                    {!loading && data.length ? (
                         <Grid container spacing={2} justify='center'>
                              {data.map((element) => (
                                   <Grid item xs={12} md={6} key={element._id}>
                                        <PhotoCardComponent
                                             thumbnailUrl={element.thumbnailUrl}
                                             title={element.title}
                                             _id={element._id}
                                        />
                                   </Grid>
                              ))}
                         </Grid>
                    ) : (
                         <Grid xs={12}>
                              <Box className={classes.pageTitle} mt='20'>
                                   <Typography
                                        variant='h5'
                                        color='textSecondary'>
                                        Be the first photo uploader for this app
                                   </Typography>
                                   <Box mt={5}>
                                        <Link
                                             to='/photos/new/upload-photo'
                                             className={classes.link}>
                                             <Button
                                                  variant='outlined'
                                                  size='large'
                                                  startIcon={
                                                       <CloudUploadRounded />
                                                  }>
                                                  Upload
                                             </Button>
                                        </Link>
                                   </Box>
                              </Box>
                         </Grid>
                    )}
               </Box>
          </Layout>
     );
};

export default ShowPhotos;
